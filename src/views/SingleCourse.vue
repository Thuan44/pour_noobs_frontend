<template>
    <div id="singleCourse">
        <notifications width="400" classes="notification" />

        <div class="left-layer"></div>
        <div class="bottom-layer d-none"></div>
        <div class="hero-container d-flex">
            <div class="empty-space"></div>
            <div class="hero-img-container">
                <img class="hero-img h-100" :src="`/assets/img/players/${course.image}`" />
            </div>
        </div>
        <div class="hero-content text-white text-start">
            <h4 class="course-author text-uppercase">
                <i v-if="parseInt(course.price) > 50" class="fa-solid fa-circle-check me-1"></i>
                {{ course.author }}
            </h4>
            <div class="divider"></div>
            <h1 class="course-name text-uppercase">{{ course.name }}</h1>
            <p class="course-description">{{ course.description }}</p>
            <div class="price-container d-flex w-50 justify-content-center align-items-center">
                <div class="small-divider"></div>
                <p class="course-price mb-0">{{ course.price }} €</p>
                <div class="small-divider"></div>
            </div>
            <button
                class="add-btn"
                @click="addToCart(store.user.cartID, course.id)"
            >S'enrôler pour cette quête</button>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import { useRoute } from "vue-router"
import { useUser } from '@/store/user.js'
import getUserCart from '@/composables/getUserCart'
import getSingleCourse from '@/composables/getSingleCourse'
import { notify } from "@kyvg/vue3-notification";

export default {
    name: "SingleCourse",
    setup() {
        const apiUrl = import.meta.env.VITE_AUTH_API_URL
        const route = useRoute()
        const store = useUser()
        let course = getSingleCourse(route.params.id)

        return { course, store, apiUrl };
    },

    methods: {
        addToCart(cartID, courseID) {

            axios
                .post(this.apiUrl + `cart/addCourseToCart/cart/${cartID}/course/${courseID}`, {}, {
                    headers: {
                        Authorization: 'Bearer ' + this.store.user.token
                    }
                })
                .then(response => {
                    if (response.status === 201) {
                        getUserCart()
                        notify({
                            title: "<i class='fa-solid fa-fire-flame-curved me-2'></i> FÉLICITATIONS !",
                            text: "Vous venez d'ajouter cette quête à votre inventaire !",
                        })
                    }
                    if (response.status === 200) {
                        notify({
                            title: "<i class='fa-solid fa-ban'></i> OUPS !",
                            text: "Cette quête fait déjà partie de votre inventaire",
                        })
                    }
                })
                .catch(e => console.log(e))

        }
    },
}
</script>

<style>
.notification {
    position: absolute;
    top: 110px !important;
    right: 0 !important;
    background-color: #ff9900 !important;
    border-left: 5px solid #cd7b01;
    color: #040806 !important;
    padding: 10px !important;
    border-radius: 3px;
    cursor: pointer;
}
</style>

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

.fa-circle-check {
    font-size: 1.4rem;
    color: #6184d8;
    position: relative;
}

.fa-circle-check::after {
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 50px;
    background-color: white;
    position: absolute;
    z-index: -1;
    top: 5px;
    left: 4px;
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

.price-container {
    width: 330px !important;
    gap: 20px;
}

.course-price {
    width: 300px;
    font-weight: bold;
    font-size: 1.4rem;
    text-align: center;
}

.small-divider {
    height: 2px;
    width: 100%;
    background-color: #00e07f;
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

    .price-container {
        margin: 0 auto;
    }
}
</style>
