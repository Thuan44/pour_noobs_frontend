<template>
    <div id="cart">
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
                                            :src="`src/assets/img/players/${course.image}`"
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
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="right-side">
                    <h4 class="text-white total-text">Total</h4>
                    <div class="divider"></div>
                    <p class="total-price text-white mb-0">{{ totalPrice }}€</p>
                    <button class="continue-btn">Accepter ces quêtes</button>
                </div>
            </div>

            <div v-else>
                <h4 class="text-white mt-4">Oups, aucune quête n'a été ajoutée à votre inventaire...</h4>
            </div>
        </div>
    </div>
</template>

<script>
import getUserCart from '@/composables/getUserCart'
import { useUser } from '@/store/user.js'
import { computed } from 'vue'

export default {
    name: "Cart",
    setup() {
        const store = useUser()

        const totalPrice = computed(() => {
            let total = 0
            for (let course of store.user.cart.courses) {
                total += parseFloat(course.price)
            }
            return total.toFixed(2);
        })

        getUserCart()

        return { store, totalPrice }
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
    border-bottom: 5px solid rgba(0, 224, 127, 0.04);
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