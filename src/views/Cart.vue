<template>
    <div id="cart">
        <notifications width="400" classes="notification" />

        <div class="container pt-4">
            <h3 class="text-start cart-title">Votre inventaire</h3>
            <hr />
            <div
                v-if="store.user.cartID && store.user.cart.courses.length > 0"
                class="table-container"
            >
                <div class="left-side">
                    <table class="table table-striped table-dark">
                        <tbody class="align-middle">
                            <tr
                                v-for="course in store.user.cart.courses"
                                :key="course.id"
                                class="table-row"
                            >
                                <td colspan="1" class="p-0" style="width: 150px !important;">
                                    <div class="img-container mx-auto d-block">
                                        <img
                                            :src="`/assets/img/players/${course.image}`"
                                            alt
                                            class="w-100 course-img d-block"
                                        />
                                    </div>
                                </td>
                                <td colspan="5" class="text-start ps-4">
                                    <div class="d-flex flex-column">
                                        <h5 class="text-uppercase course-author">{{ course.author }}</h5>
                                        <p class="course-name mb-0">{{ course.name }}</p>
                                    </div>
                                </td>
                                <td colspan="5" class="course-price">{{ course.price }}€</td>
                                <td colspan="1">
                                    <button
                                        type="button"
                                        class="delete-btn"
                                        @click="destroyCourse(store.user.cart.id, course.id)"
                                    >
                                        <i class="fa-solid fa-circle-xmark"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="right-side">
                    <h4 class="text-white total-text">Total</h4>
                    <div class="divider"></div>
                    <p class="total-price text-white mb-0">{{ totalPrice }}€</p>
                    <button
                        v-if="store.user.cart.courses.length > 1"
                        class="continue-btn"
                    >Accepter ces quêtes</button>
                    <button v-else class="continue-btn">Accepter la quête</button>
                </div>
            </div>

            <div v-else>
                <h4 class="text-white mt-4">Oups, aucune quête n'a été ajoutée à votre inventaire...</h4>
            </div>
        </div>
    </div>
</template>

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

<script>
import getUserCart from '@/composables/getUserCart'
import { useUser } from '@/store/user.js'
import { computed } from 'vue'
import axios from "axios"
import { notify } from "@kyvg/vue3-notification";

export default {
    name: "Cart",
    setup() {
        const apiUrl = import.meta.env.VITE_AUTH_API_URL
        const store = useUser()

        const totalPrice = computed(() => {
            let total = 0
            for (let course of store.user.cart.courses) {
                total += parseFloat(course.price)
            }
            return total.toFixed(2);
        })

        const destroyCourse = (cartID, courseID) => {
            axios
                .delete(apiUrl + `cart/destroyCourseFromCart/cart/${cartID}/course/${courseID}`, {
                    headers: {
                        Authorization: 'Bearer ' + store.user.token
                    }
                })
                .then(response => {
                    if (response.status === 200) {
                        getUserCart()
                        notify({
                            title: "<i class='fa-solid fa-hand-lizard'></i> PETIT JOUEUR !",
                            text: "Cette quête ne fait plus partie de votre inventaire",
                        })
                    }
                    if (response.status === 404) {
                        notify({
                            title: "<i class='fa-solid fa-ban'></i> OUPS !",
                            text: "Cette quête n'est pas dans votre inventaire",
                        })
                    }
                })
                .catch(e => console.log(e))
        }

        if (store.user.cart) {
            getUserCart()
        }

        return { store, totalPrice, destroyCourse }
    }
}
</script>

<style scoped>
#cart {
    height: 90vh;
    background-image: url(@/assets/img/bg_layered-peaks-haikei.svg);
    background-repeat: no-repeat, repeat;
    background-size: cover;
    background-position: center;
}

.cart-title {
    color: #00e07f;
    font-family: "ProximaNova", "Roboto", sans-serif;
    font-weight: normal;
}

.table-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
}

.table {
    box-shadow: 0 0 10px rgba(0, 224, 127, 0.3);
}

.table-row {
    border-bottom: 4px solid rgba(0, 224, 127, 0.04);
}

.fa-circle-minus {
    color: red;
    z-index: 2;
}

.img-container {
    max-width: 150px;
}

.course-img {
    border-radius: 3px;
}

.course-author {
    font-weight: bold;
    font-size: 1.4rem;
}
.course-name,
.course-price {
    font-size: 1.2rem;
}

.delete-btn {
    background: none;
    border: none;
    color: #fff;
}
.delete-btn:hover {
    color: red;
}

.right-side {
    padding: 0 30px;
    text-align: left;
}

.divider {
    height: 2px;
    width: 20px;
    background-color: #00e07f;
    margin-bottom: 10px;
}

.total-price {
    font-size: 2rem;
    text-shadow: 2px 2px 3px rgba(0, 224, 127, 0.5);
}

.continue-btn {
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

.continue-btn:hover {
    box-shadow: 0 0 10px rgba(0, 224, 127, 0.5);
    filter: brightness(110%);
}

/* Media queries */
@media only screen and (max-width: 1400px) {
    .table-container {
        grid-template-columns: 1fr;
    }

    .right-side {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 10px;
        padding: 20px 0;
    }

    .divider {
        display: none;
    }

    .total-text {
        margin-bottom: 0;
    }
    .total-price {
        text-shadow: 2px 2px 3px rgba(255, 153, 0, 0.5) !important;
    }

    .continue-btn {
        margin-top: 0;
        margin-left: 20px;
        background-color: #ff9900;
        box-shadow: 0 0 10px rgba(255, 153, 0, 0.3) !important;
    }
    .continue-btn:hover {
        box-shadow: 0 0 10px rgba(255, 153, 0, 0.8) !important;
        filter: brightness(110%);
    }
}
</style>