<template>
    <div id="navbar">
        <div class="container">
            <div class="top-menu">
                <div class="logo-container">
                    <img
                        class="logo-img w-100"
                        src="@/assets/img/logo_horizontal.png"
                        alt="Logo Pour noobs"
                    />
                </div>
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
                <div class="auth-container">
                    <a href="#" class="btn login-btn">Se connecter</a>
                    <a href="#" class="btn register-btn">Inscrivez-vous !</a>
                </div>
            </div>
            <div class="bottom-menu"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Navbar",
    setup() {


        return {}
    }
}
</script>

<style scoped>
#navbar {
    background-color: #1b1b1b;
}

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

.auth-container a {
    color: #fff;
    font-size: 0.8rem;
}
</style>