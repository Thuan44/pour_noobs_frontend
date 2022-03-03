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
                        <input type="email" placeholder="Courriel" v-model="email" />
                        <input
                            type="text"
                            placeholder="Pseudo (4 caractères minimum)"
                            v-model="name"
                        />
                        <input
                            type="password"
                            placeholder="Mot de passe (4 caractères minimum)"
                            v-model="password"
                            autocomplete
                        />
                        <input
                            type="password"
                            placeholder="Confirmez votre mot de passe"
                            v-model="password_confirmation"
                            autocomplete
                        />
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
import { ref } from "vue"
import axios from "axios"
import Navbar from "@/components/NavbarComponent.vue"

export default {
    name: "register",
    components: { Navbar },
    setup() {
        const router = useRouter()
        const email = ref('')
        const name = ref('')
        const password = ref('')
        const password_confirmation = ref('')

        const postApiUrl = import.meta.env.VITE_AUTH_API_URL

        const register = () => {
            axios
                .post(postApiUrl + "register", {
                    email: email.value,
                    name: name.value,
                    password: password.value,
                    password_confirmation: password_confirmation.value
                })
                .then(response => {
                    if (response.status === 201) {
                        router.push("/")
                    } else {
                        alert("Oups, there was an error. Please try again")
                    }
                })
                .catch(e => {
                    alert("Oups, there was an error. Please try again")
                    console.log(e)
                })
        }

        return { email, name, password, password_confirmation, register }
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