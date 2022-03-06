<template>
    <div id="singleCourse">
        <div class="left-layer"></div>
        <div class="hero-container d-flex">
            <div class="empty-space"></div>
            <div class="hero-img-container">
                <img class="hero-img h-100" src="@/assets/img/players/corejj.png" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
import axios from "axios"
import { useRoute } from "vue-router"

export default {
    name: "SingleCourse",
    setup() {
        const apiUrl = import.meta.env.VITE_AUTH_API_URL
        const route = useRoute()
        let course = ref({})

        // Get course data 
        axios
            .get(apiUrl + 'courses/' + route.params.id)
            .then(response => {
                course.value = response.data
            })
            .catch(e => console.log(e))

        return { course };
    }
}
</script>

<style scoped>
#singleCourse {
    position: relative;
    height: 90vh;
    background-color: #040806;
}
.left-layer {
    height: 90vh;
    position: absolute;
    width: 100%;
    z-index: 2;
    background: rgb(4, 8, 6);
    background: linear-gradient(
        90deg,
        rgba(4, 8, 6, 1) 0%,
        rgba(4, 8, 6, 1) 50%,
        rgba(4, 8, 6, 0.7945553221288515) 57%,
        rgba(4, 8, 6, 0.5788690476190477) 60%,
        rgba(255, 255, 255, 0) 63%
    );
}
.hero-container {
    height: 100%;
}
.empty-space {
    height: 100%;
    width: 50%;
}
.hero-img-container {
    height: 100%;
    transform: translateX(180px);
}

@media only screen and (max-width: 1460px) {
}
</style>