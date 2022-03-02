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
                    <button class="btn search-btn" type="button">Rechercher</button>
                </div>
                <div class="premium-container"></div>
                <div class="auth-container"></div>
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
    height: 26px;
    margin-bottom: 10px;
}

.search-input {
    background-color: #363636;
    border: none;
}
.search-btn {
    background-color: #00e07f;
    color: #040806;
    border: none;
}
</style>