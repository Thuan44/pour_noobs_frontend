<template>
    <div id="login">
        <div class="container d-flex justify-content-center">
            <div class="left-container w-50">
                <h1 class="login-title">
                    <span class="revenez">REVENEZ</span> À VOTRE DERNIER POINT DE SAUVEGARDE !
                </h1>
            </div>
            <div class="right-container w-50">
                <div class="form-container">
                    <div class="headings">
                        <h2 class="form-title">Connexion</h2>
                        <p class="form-subtitle">Prêt à conquérir le monde de l'e-sport ?</p>
                    </div>
                    <form
                        @submit.stop.prevent="login"
                        method="POST"
                        class="login-form d-flex flex-column p-3"
                    >
                        <input type="text" placeholder="Courriel" v-model="state.email" />
                        <p v-if="v$.email.$error" class="text-danger mb-0 text-start">
                            <small>{{ v$.email.$errors[0].$message }}</small>
                        </p>
                        <div class="password">
                            <input
                                class="w-100"
                                type="password"
                                placeholder="Mot de passe"
                                v-model="state.password"
                                autocomplete
                            />
                            <p v-if="v$.password.$error" class="text-danger mb-0 text-start">
                                <small>{{ v$.password.$errors[0].$message }}</small>
                            </p>
                        </div>
                        <div class="login-buttons d-flex flex-column align-items-center">
                            <div class="classic-login d-flex align-items-center mb-3">
                                <button
                                    type="submit"
                                    class="btn submit-btn"
                                    name="classic"
                                >Connectez-vous !</button>
                                <span class="mx-3 text-white">Ou</span>
                                <router-link to="/register" class="register-link">Inscription</router-link>
                            </div>
                            <div class="oauth-login w-100">
                                <form
                                    @submit.stop.prevent="githubLogin"
                                    method="POST"
                                    class="login-form"
                                >
                                    <button
                                        type="submit"
                                        class="btn github-btn w-100"
                                        name="github"
                                    >
                                        <i class="fa-brands fa-github me-2"></i> Connectez-vous avec Github
                                    </button>
                                </form>
                            </div>
                        </div>
                        <p class="text-white terms-conditions mb-0">
                            <small>
                                En vous inscrivant, vous acceptez nos
                                <span>
                                    <a href="#" class="terms-conditions-link">termes et conditions</a>
                                </span>
                            </small>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { ref, computed, reactive } from "vue"
import axios from "axios"
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, helpers } from '@vuelidate/validators'
import { useUser } from '@/store/user.js'
 import { useAuth0 } from '@auth0/auth0-vue';

export default {
    name: "Login",

    setup() {
        const postApiUrl = import.meta.env.VITE_AUTH_API_URL
        const router = useRouter()
        const store = useUser()
        const { loginWithRedirect } = useAuth0();

        const state = reactive({
            email: '',
            password: '',
        })

        const rules = computed(() => {
            return {
                email: { required: helpers.withMessage('Ce champ est requis', required), email: helpers.withMessage('Le format de l\'email n\'est pas valide', email) },
                password: { required: helpers.withMessage('Ce champ est requis', required) },
            }
        })

        const v$ = useVuelidate(rules, state)

        return { state, v$, postApiUrl, store, router }
    },

    methods: {
        async login() {
            const isFormCorrect = await this.v$.$validate()
            if (isFormCorrect) {
                axios
                    .post(this.postApiUrl + "login", {
                        email: this.state.email,
                        password: this.state.password,
                    })
                    .then(response => {
                        if (response.status === 200) {
                            let res = response.data
                            this.store.setUserInfos(res.user.id, res.user.name, res.user.email, res.token)
                            res.user.role == "admin" ? this.store.setAsAdmin() : ''
                            this.router.push("/")
                        } else {
                            alert("Oups, there was an error. Please try again")
                        }
                    })
                    .catch(e => {
                        alert("Oups, there was an error. Please try again")
                        console.log(e)
                    })
            } else {
                console.log("Some fields are not correct")
            }
        },

        // async githubLogin() {
        //     axios
        //         .post(this.postApiUrl + "sign-in/github", {})
        //         .then(response => {
        //             if (response.status === 200) {
        //                 let res = response.data
        //                 this.store.setUserInfos(res.user.id, res.user.name, res.user.email, res.token)
        //                 res.user.role == "admin" ? this.store.setAsAdmin() : ''
        //                 this.router.push("/")
        //             } else {
        //                 alert("Oups, there was an error with Github. Please try again")
        //             }
        //         })
        //         .catch(e => {
        //             alert("Oups, there was an error with Github. Please try again")
        //             console.log(e)
        //         })
        // },

        githubLogin(){
            this.$auth0.loginWithRedirect();
        }
    },
}
</script>

<style scoped>
#login{
    height: 90vh;
    background-image: url("@/assets/img/bg_login.png");
    background-repeat: no-repeat, repeat;
    background-size: cover;
    background-position: center;
}

.left-container {
    padding-top: 260px;
}

.revenez {
    background-color: #00e07f;
    color: #040806;
    padding: 5px 10px;
    border-radius: 5px;
    text-shadow: none;
}

.login-title {
    font-size: 54px;
    width: 80%;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    text-align: left;
    text-shadow: 1px 1px 3px #6b6b6b;
}

.right-container {
    padding-top: 200px;
    display: flex;
    justify-content: center;
}

.form-container {
    background: rgba(0, 0, 0, 0.95);
    border-radius: 2px;
    border: 1px solid #333;
    padding: 20px;
    max-width: 500px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
        rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    min-width: 450px;
}

.form-title {
    font-size: 44px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0;
}

.form-subtitle {
    text-align: center;
    color: #898787;
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;
}

.login-form input {
    box-sizing: border-box;
    border-radius: 2px;
    border: 1px solid #555;
    background: rgba(0, 0, 0, 0.9);
    padding: 12px 15px;
    font-size: 17px;
    margin-top: 5px;
    margin-bottom: 5px;
    color: #ccc;
}

.login-buttons {
    margin-top: 20px;
    margin-bottom: 20px;
}

.submit-btn {
    width: 280px;
    background: #00e07f;
    color: #040806;
    padding: 12px 15px;
    font-size: 17px;
    font-weight: bold;
    transition: 0.2s ease-in-out;
}

.submit-btn:hover {
    filter: brightness(115%);
}

.github-btn {
    background-color: #313131;
    color: #fff;
    transition: 0.2s ease-in-out;
    padding: 12px 15px;
}

.github-btn:hover {
    filter: brightness(135%);
}

.register-link {
    text-decoration: none;
    color: #00e07f;
    font-weight: bold;
}

.terms-conditions {
    font-size: 0.9rem;
}

.terms-conditions-link {
    text-decoration: none;
    color: #00e07f;
}

/* Media queries */
@media only screen and (min-width: 1400px) {
    .right-container {
        padding-top: 180px;
    }

    .container {
        display: flex;
        justify-content: center;
    }
}

@media only screen and (max-width: 1460px) {
    .left-container {
        padding-top: 200px;
        padding-left: 100px;
    }
    .login-title {
        font-size: 2.8rem;
        width: 90%;
    }
    .right-container {
        padding-top: 100px;
    }
    .password-fields {
        display: flex;
        gap: 10px;
    }
    .submit-btn {
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media only screen and (max-width: 1300px) {
    .left-container {
        padding-top: 100px;
        padding-left: 100px;
    }
    .right-container {
        padding-top: 50px;
    }
    .login-title {
        font-size: 2.8rem;
        width: 90%;
    }
    .login-buttons {
        flex-direction: column;
        gap: 10px;
    }
    .submit-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 100%;
    }
}

@media only screen and (max-width: 1000px) {
    .container {
        max-width: none;
    }
    .left-container {
        display: none;
    }
    .right-container {
        width: 80% !important;
    }
}
</style>