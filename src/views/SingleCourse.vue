<template>
    <div id="singleCourse">
        <div class="left-layer"></div>
        <div class="bottom-layer d-none"></div>
        <div class="hero-container d-flex">
            <div class="empty-space"></div>
            <div class="hero-img-container">
                <img class="hero-img h-100" :src="`../src/assets/img/players/${course.image}`" />
            </div>
        </div>
        <div class="hero-content text-white text-start">
            <h4 class="course-author text-uppercase">{{ course.author }}</h4>
            <div class="divider"></div>
            <h1 class="course-name text-uppercase">{{ course.name }}</h1>
            <p class="course-description">{{ course.description }}</p>
            <button class="add-btn">S'enrôler pour cette quête</button>
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
    overflow: hidden;
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
.bottom-layer {
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 2;
    background: rgb(4, 8, 6);
    background: linear-gradient(
        0deg,
        rgba(4, 8, 6, 1) 0%,
        rgba(4, 8, 6, 1) 30%,
        rgba(4, 8, 6, 0.7945553221288515) 40%,
        rgba(4, 8, 6, 0.5788690476190477) 45%,
        rgba(255, 255, 255, 0) 52%
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
    position: relative;
}

.hero-content {
    position: absolute;
    z-index: 3;
    top: 100px;
    left: 10%;
    max-width: 800px;
}

.course-author {
    font-size: 1.8rem;
    font-weight: bold;
}
.divider {
    height: 2px;
    width: 20px;
    background-color: #00e07f;
    margin-bottom: 20px;
}
.course-name {
    font-size: 3rem;
    font-weight: bold;
}

.course-description {
    font-size: 1.2rem;
}
.add-btn {
    font-size: 1.2rem;
    background-color: #00e07f;
    color: #040806;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 0 0 10px rgba(0, 224, 127, 0.2);
    transition: 0.1s ease-in;
    margin-top: 20px;
}
.add-btn:hover {
    box-shadow: 0 0 10px rgba(0, 224, 127, 0.5);
    filter: brightness(110%);
}

@media only screen and (max-width: 1200px) {
    .left-layer,
    .empty-space {
        display: none;
    }

    .bottom-layer {
        display: block !important;
    }

    .hero-img-container {
        width: 100%;
        transform: translateX(0);
    }

    .hero-img {
        width: 100%;
        height: auto !important;
    }
    .hero-content {
        text-align: center !important;
        max-width: 100% !important;
        width: 90% !important;
        left: 50%;
        top: 70%;
        transform: translate(-50%, -50%);
    }

    .course-author {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .divider {
        display: none;
    }

    .course-name {
        font-size: 2.5rem;
    }

    .course-description {
        font-size: 1rem;
    }
}
</style>