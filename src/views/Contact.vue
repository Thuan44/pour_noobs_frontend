<template>
    <div id="contact">
        <div class="container pt-4">
            <div class="d-flex flex-column justify-content-center align-items-center p-5">
                <div class="img-container">
                    <img src="@/assets/img/gotaga_serious.png" class="w-100" />
                </div>
                <h4 class="text-white mt-4">Oups, cette page est encore en construction !</h4>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Contact",
    setup() {
        return {}
    }
}
</script>

<style scoped>
#contact {
    height: 90vh;
    background-image: url(@/assets/img/bg_layered-peaks-haikei.svg);
    background-repeat: no-repeat, repeat;
    background-size: cover;
    background-position: center;
}

.img-container {
    width: 400px;
    border-bottom: 2px solid #00e07f;
}
</style>