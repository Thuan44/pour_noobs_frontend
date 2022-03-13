<template>
    <div id="navbar">
        <div class="container">
            <div class="top-menu">
                <router-link to="/" class="logo-container">
                    <img
                        class="logo-img w-100"
                        src="@/assets/img/logo_horizontal.png"
                        alt="Logo Pour noobs"
                    />
                </router-link>
                <div class="input-group search-container">
                    <input
                        type="search"
                        class="form-control search-input"
                        placeholder="Rechercher une formation"
                        aria-label="Rechercher une formation"
                        aria-describedby="button-addon2"
                    />
                    <button class="btn search-btn" type="button">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div class="premium-container">
                    <a href="#" class="btn premium-btn">
                        <i class="fa-solid fa-star me-2"></i> Premium
                    </a>
                </div>
                <div v-if="!store.user.isLoggedIn" class="auth-container">
                    <router-link to="/login" class="btn register-btn">Se connecter</router-link>
                    <router-link to="/register" class="btn register-btn">Inscrivez-vous !</router-link>
                </div>
                <div v-else class="toolbar d-flex dropdown align-items-center">
                    <router-link to="/cart" class="text-white text-decoration-none cart-btn">
                        <i class="fa-solid fa-cart-shopping text-white me-1 position-relative">
                            <span
                                v-if="store.user.cartID && store.user.cartCourseNumber > 0"
                                class="position-absolute start-100 translate-middle badge rounded-pill bg-danger cart-badge"
                            >{{ store.user.cartCourseNumber }}</span>
                        </i>
                        Inventaire
                    </router-link>
                    <button
                        class="dropdown-toggle profile-btn d-flex"
                        id="profileDropdownBtn"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <p class="mb-0 me-2 ms-4">
                            <i v-if="store.user.isAdmin" class="fa-solid fa-user-shield me-1"></i>
                            <i v-if="!store.user.isAdmin" class="fa-solid fa-user me-1"></i>
                            Bonjour {{ store.user.name }} !
                        </p>
                    </button>
                    <ul class="dropdown-menu game-over-menu" aria-labelledby="profileDropdownBtn">
                        <li class="h-100 w-100">
                            <a class="dropdown-item" href="#" @click="logout">
                                Game Over
                                <i class="fa-solid fa-skull ms-2"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="menu-divider"></div>
        <div class="container">
            <div class="bottom-menu d-flex">
                <ul class="menu-list list-unstyled w-100 mb-0">
                    <li class="active">
                        <router-link to="/">ACCUEIL</router-link>
                    </li>
                    <li>
                        <a href>A PROPOS</a>
                    </li>
                    <li class="category-dropdown position-relative">
                        <a href>
                            CATÉGORIES
                            <i class="fa-solid fa-caret-down ms-1"></i>
                        </a>
                        <div class="category-dropdown-content">
                            <a href="#" v-for="category in categories">
                                <div class="category-img-container position-relative">
                                    <img
                                        :src="`src/assets/img/categories/${category.image}`"
                                        alt
                                        class="w-100 category-img"
                                    />
                                    <h5
                                        class="category-title position-absolute text-uppercase"
                                    >{{ category.name }}</h5>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <a href>
                            JOUEURS
                            <i class="fa-solid fa-caret-down ms-1"></i>
                        </a>
                    </li>
                    <li>
                        <a href>SPONSORS</a>
                    </li>
                    <li>
                        <a href>COMMUNAUTÉ</a>
                    </li>
                    <li>
                        <a href>BLOG</a>
                    </li>
                    <li>
                        <a href>CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { useUser } from '@/store/user.js'
import axios from "axios"
import getUserCart from '@/composables/getUserCart';
import getCategories from '@/composables/getCategories';

export default {
    name: "TheNavbar",

    setup() {
        const apiUrl = import.meta.env.VITE_AUTH_API_URL
        const router = useRouter()
        const store = useUser()
        let categories = getCategories()

        getUserCart()

        return { store, router, categories, apiUrl }
    },

    methods: {
        logout() {
            axios
                .post(this.apiUrl + 'logout', {}, {
                    headers: {
                        Authorization: 'Bearer ' + this.store.user.token
                    },
                })
                .then(response => {
                    localStorage.removeItem("user");
                    this.store.$reset()
                    console.log('User logged out successfully')
                })
                .catch(e => console.log(e))
        },
    },

    mounted() {
    }
}
</script>

<style scoped>
#navbar {
    background-color: #1b1b1b;
}

/* Top menu */
.top-menu {
    display: grid;
    grid-template-columns: 250px 500px 300px 270px;
    grid-gap: 10px;
    align-items: center;
    justify-items: center;
    justify-content: center;
    padding: 2px 0;
}

.logo-container {
    width: 200px;
}

.search-container {
    height: 25px;
}

.search-input {
    height: 100%;
    background-color: #363636;
    border: none;
    color: #ccc;
}
.search-input::placeholder {
    font-style: italic;
    font-size: 0.9rem;
}
.search-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #00e07f;
    color: #040806;
    border: none;
    width: 50px;
}

.premium-container {
    justify-self: start;
}
.fa-star {
    font-size: 0.8rem;
}
.premium-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00e07f;
    color: #040806;
    border: none;
    height: 25px;
    font-size: 0.8rem;
    font-weight: bold;
}

.auth-container a,
.toolbar {
    color: #ccc;
    font-size: 0.8rem;
}

.cart-badge {
    font-size: 0.5rem;
    top: -5px;
    background-color: #ff9900 !important;
    color: #040806;
}

.profile-btn {
    background-color: #1b1b1b;
    border: none;
    color: #fff;
}

.profile-btn::after {
    margin-top: 8px;
}
.game-over-menu {
    background-color: #1b1b1b;
    border-radius: 3px !important;
    padding: 0;
    text-align: center;
    border-radius: 0;
    height: 50px;
    margin-top: 9px !important;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px !important;
    border: 1px solid #00e07f;
    opacity: 0.9;
}

.game-over-menu:hover {
    background-color: #00e07f;
    opacity: 1;
}

.game-over-menu a {
    color: #fff;
    background-color: #040806;
    border-radius: 3px !important;
    font-size: 0.9rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: background-color 0.3s ease !important;
}

.game-over-menu a:hover {
    color: #040806;
    background-color: #00e07f;
}

.fa-headset {
    font-size: 1.1rem;
}

.auth-container a:hover {
    color: #fff;
}

.menu-divider {
    width: 100%;
    height: 0.5px;
    background-color: #e3e3e3;
    opacity: 0.1;
}

/* Bottom menu */
.bottom-menu {
    height: 40px;
}

.menu-list {
    display: grid;
    grid-template-columns: 163px 163px 163px 163px 163px 163px 163px 163px;
    align-items: center;
    justify-items: center;
    justify-content: center;
}

.menu-list li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.menu-list li:hover {
    cursor: pointer;
    background: #191919;
    border-top: 2px solid #252525;
    border-left: 2px solid #252525;
    border-right: 2px solid #252525;
}

.menu-list a {
    font-size: 0.6rem;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
}
.active {
    border-bottom: 3px solid #00e07f;
}
.category-dropdown-content {
    display: none;
    position: absolute;
    top: 215px;
    left: 204%;
    transform: translate(-50%, -50%);
    padding: 80px;
    width: 1440px;
    background-color: #040806;
    box-shadow: 0px 8px 10px 0px rgba(255, 153, 0, 0.2);
    z-index: 4;
    border-bottom: 2px solid #ff9900;
}

.category-dropdown:hover .category-dropdown-content {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    transition: 2s;
    gap: 40px;
}

.category-img-container {
    box-shadow: 0 0 10px 0 rgba(255, 153, 0, 0.2);
    border-radius: 3px;
    margin-bottom: 10px;
    transition: 0.1s ease-in;
}

.category-img-container:hover {
    box-shadow: 0 0 10px 0 rgba(255, 153, 0, 0.6);
    transform: scale(1.05);
}

.category-img {
    border-radius: 3px;
}

.category-title {
    font-weight: bold;
    left: 20px;
    bottom: 10px;
    text-shadow: 1px 1px 2px rgba(255, 153, 0, 0.9);
}

/* Media queries */
@media only screen and (max-width: 1300px) {
    .top-menu {
        display: grid;
        grid-template-columns: 250px 250px 150px 270px;
        grid-gap: 5px;
    }
    .menu-list {
        display: grid;
        grid-template-columns: 110px 110px 110px 110px 110px 110px 110px 110px;
    }
    .category-dropdown-content {
        max-width: 1200px;
        padding: 50px;
        top: 172px;
    }
}

@media only screen and (max-width: 1100px) {
    .category-dropdown-content {
        max-width: 1000px;
        top: 156px;
    }
}

@media only screen and (max-width: 992px) {
    .category-dropdown-content {
        max-width: 950px;
        top: 152px;
    }
}
</style>