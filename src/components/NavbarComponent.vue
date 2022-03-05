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
                    <a href="#" class="btn register-btn">Se connecter</a>
                    <router-link to="/register" class="btn register-btn">Inscrivez-vous !</router-link>
                </div>
                <div v-else class="auth-greetings d-flex dropdown">
                    <button
                        class="dropdown-toggle profile-btn d-flex"
                        id="profileDropdownBtn"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <p class="mb-0 me-2">Bonjour {{ store.user.name }} !</p>
                    </button>
                    <ul class="dropdown-menu game-over-menu" aria-labelledby="profileDropdownBtn">
                        <li class="h-100 w-100">
                            <a class="dropdown-item" href="#">
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
                        <a href>ACCUEIL</a>
                    </li>
                    <li>
                        <a href>A PROPOS</a>
                    </li>
                    <li>
                        <a href>
                            CATÉGORIES
                            <i class="fa-solid fa-caret-down ms-1"></i>
                        </a>
                    </li>
                    <li>
                        <a href>
                            JOUEURS
                            <i class="fa-solid fa-caret-down ms-1"></i>
                        </a>
                    </li>
                    <li>
                        <a href>LIVESTREAMING</a>
                    </li>
                    <li>
                        <a href>COACHING</a>
                    </li>
                    <li>
                        <a href>SANTÉ E-SPORT</a>
                    </li>
                    <li>
                        <a href>COMMUNAUTÉ</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '@/store/user.js'

export default {
    name: "Navbar",
    setup() {
        const store = useUserStore()

        return { store }
    },
    mounted() {
        console.log(this.store.user.isLoggedIn)
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
.auth-greetings {
    color: #ccc;
    font-size: 0.8rem;
}
.auth-greetings {
    margin-right: -60px;
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
    padding: 0;
    text-align: center;
    border-radius: 0;
    height: 50px;
    margin-top: 9px !important;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px !important;
    inset: 0px auto auto -20px !important;
    border: 1px solid #00e07f;
}

.game-over-menu:hover {
    background-color: #00e07f;
}

.game-over-menu a {
    color: #fff;
    background-color: #040806;
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
}
</style>