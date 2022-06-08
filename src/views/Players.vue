<template>
    <div id="players">
        <div class="container pt-4">
            <div class="d-flex flex-column justify-content-center align-items-center p-5">
                <div class="img-container">
                    <img src="@/assets/img/chowh1.png" class="w-100" />
                </div>
                <h4 class="text-white mt-4">Oups, cette page est encore en construction !</h4>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Players",
    setup() {
        return {}
    }
}
</script>

<style scoped>
#players {
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