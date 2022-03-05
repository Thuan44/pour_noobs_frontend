<template>
    <div id="register">
        <div class="container d-flex justify-content-center">
            <div class="left-container w-50">
                <div class="logo-container">
                    <img
                        class="logo-img w-100"
                        src="@/assets/img/logo_horizontal.png"
                        alt="Logo Pour noobs"
                    />
                </div>
                <h1 class="register-title">POUR NOOBS A BIEN PLUS QUE VOUS NE PENSEZ À VOUS OFFRIR !</h1>
            </div>
            <div class="right-container w-50">
                <div class="form-container">
                    <div class="headings">
                        <h2 class="form-title">Inscription gratuite</h2>
                        <p class="form-subtitle">Venez améliorer votre expérience</p>
                    </div>
                    <form
                        @submit.stop.prevent="register"
                        method="POST"
                        class="register-form d-flex flex-column p-3"
                    >
                        <input type="text" placeholder="Courriel" v-model="state.email" />
                        <p v-if="v$.email.$error" class="text-danger mb-0 text-start">
                            <small>{{ v$.email.$errors[0].$message }}</small>
                        </p>
                        <input
                            type="text"
                            placeholder="Pseudo (4 caractères minimum)"
                            v-model="state.name"
                        />
                        <p v-if="v$.name.$error" class="text-danger mb-0 text-start">
                            <small>{{ v$.name.$errors[0].$message }}</small>
                        </p>
                        <div class="password-fields">
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
                            <div class="password-confirmation">
                                <input
                                    class="w-100"
                                    type="password"
                                    placeholder="Confirmer mot de passe"
                                    v-model="state.password_confirmation"
                                    autocomplete
                                />
                                <p
                                    v-if="v$.password_confirmation.$error"
                                    class="text-danger mb-0 text-start"
                                >
                                    <small>{{ v$.password_confirmation.$errors[0].$message }}</small>
                                </p>
                            </div>
                        </div>
                        <div class="register-buttons d-flex align-items-center">
                            <button type="submit" class="btn submit-btn">Inscrivez-vous !</button>
                            <span class="mx-3 text-white">Ou</span>
                            <a href="#" class="register-link">Connexion</a>
                        </div>
                        <p class="text-white terms-conditions">
                            <small>
                                En vous inscrivant, vous acceptez nos
                                <span>
                                    <a href="1" class="terms-conditions-link">termes et conditions</a>
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
import Navbar from "@/components/NavbarComponent.vue"
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, helpers } from '@vuelidate/validators'
import { useUserStore } from '@/store/user.js'

export default {
    name: "Register",
    components: { Navbar },

    setup() {
        const postApiUrl = import.meta.env.VITE_AUTH_API_URL
        const router = useRouter()
        const store = useUserStore()

        const state = reactive({
            email: '',
            name: '',
            password: '',
            password_confirmation: ''
        })

        const rules = computed(() => {
            return {
                email: { required: helpers.withMessage('Ce champ est requis', required), email: helpers.withMessage('Le format de l\'email n\'est pas valide', email) },
                name: { required: helpers.withMessage('Ce champ est requis', required) },
                password: { required: helpers.withMessage('Ce champ est requis', required) },
                password_confirmation: { required: helpers.withMessage('Ce champ est requis', required), sameAs: sameAs(state.password) }
            }
        })

        const v$ = useVuelidate(rules, state)

        return { state, v$, postApiUrl, store, router }
    },

    methods: {
        async register() {
            const isFormCorrect = await this.v$.$validate()
            if (isFormCorrect) {
                axios
                    .post(this.postApiUrl + "register", {
                        email: this.state.email,
                        name: this.state.name,
                        password: this.state.password,
                        password_confirmation: this.state.password_confirmation
                    })
                    .then(response => {
                        if (response.status === 201) {
                            this.store.setUserInfos(this.state.name, this.state.email)
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
        }
    },

    mounted() {
    }
}
</script>

<style scoped>
#register {
    height: 90vh;
    background-image: url("@/assets/img/bg_register.png");
    background-repeat: no-repeat, repeat;
    background-size: cover;
    background-position: center;
}

.left-container {
    padding-top: 150px;
}

.logo-container {
    margin-left: -15px;
    width: 250px;
    margin-bottom: 15px;
}

.register-title {
    font-size: 54px;
    width: 80%;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    text-align: left;
    text-shadow: 1px 1px 3px #6b6b6b;
}

.right-container {
    padding-top: 60px;
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

.register-form input {
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

.register-buttons {
    margin-top: 20px;
    margin-bottom: 20px;
}

.submit-btn {
    width: 280px;
    background: #00e07f;
    color: #040806;
    padding: 15px 20px;
    font-size: 17px;
    font-weight: bold;
}

.submit-btn:hover {
    filter: brightness(105%);
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
        padding-top: 100px;
    }

    .container {
        display: flex;
        justify-content: center;
    }
}

@media only screen and (max-width: 1460px) {
    .left-container {
        padding-top: 100px;
        padding-left: 100px;
    }
    .register-title {
        font-size: 2.8rem;
        width: 90%;
    }
    .right-container {
        padding-top: 40px;
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
    .form-container {
        transform: scale(0.9);
    }
    .left-container {
        padding-top: 100px;
        padding-left: 100px;
    }
    .register-title {
        font-size: 2.8rem;
        width: 90%;
    }
    .register-buttons {
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