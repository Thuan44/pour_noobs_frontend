<template>
  <div id="home">
    <div id="section1">
      <div class="container pt-4">
        <div class="intro-banner w-100 position-relative">
          <div class="home-heading">
            <h1 class="home-title">Pour tous les noobs...</h1>
            <p class="mb-0 text-start home-subtitle">...qui en ont marre d'être des noobs.</p>
          </div>
          <img
            src="@/assets/img/intro-banner_gotaga.png"
            alt="Gotaga"
            class="intro-banner-img w-100"
          />
        </div>
        <main class="main-content">
          <h3 class="text-start courses-title">Toutes les formations</h3>
          <hr />
          <div class="courses-container mt-4">
            <router-link
              :to="`/courses/${course.id}`"
              class="card-container text-decoration-none"
              v-for="course in courses"
            >
              <span
                class="badge bg-primary category-badge"
                :class="{
                  'green-badge': course.category_id == 1,
                  'black-badge': course.category_id == 2,
                  'white-badge': course.category_id == 3,
                  'blue-badge': course.category_id == 4,
                }"
              >{{ course.category.name }}</span>
              <img :src="`src/assets/img/players/${course.image}`" alt class="w-100" />
              <div class="card-content">
                <h4 class="course-title text-uppercase">
                  <i v-if="parseInt(course.price) > 50" class="fa-solid fa-circle-check me-1"></i>
                  {{ course.author }}
                </h4>
                <p class="mb-0 course-description">{{ course.name.substring(0, 30) + '...' }}</p>
              </div>
            </router-link>
          </div>
        </main>
      </div>
    </div>
    <div id="section2"></div>
  </div>
</template>


<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useLoading } from 'vue-loading-overlay'
import { useUser } from '@/store/user.js'
import getUserCart from '@/composables/getUserCart'

export default {
  name: "Home",
  setup() {
    const apiUrl = import.meta.env.VITE_AUTH_API_URL
    let courses = ref([])
    const store = useUser()

    // Loading bars
    const $loading = useLoading()
    let loader = $loading.show({
      color: '#00e07f',
      loader: 'bars',
      width: 64,
      height: 64,
      opacity: 0.8,
      backgroundColor: '#040806',
    })

    // Get courses data
    axios
      .get(apiUrl + 'courses')
      .then(response => {
        courses.value = response.data
        loader.hide()
      })
      .catch(e => console.log(e))

    // Check for user's cart
    if (store.user.isLoggedIn) {
      axios
        .post(apiUrl + `cart/createOrGetCart/${store.user.id}`, {}, {
          headers: {
            Authorization: 'Bearer ' + store.user.token
          }
        })
        .then(res => {
          if (res.status === 200 || res.status === 201) {
            store.setCartID(res.data.id)
            getUserCart()
          }
        })
        .catch(e => console.log(e))
    }

    return { courses, apiUrl, store };
  }

}
</script>

<style scoped>
#section1 {
  background-image: url(@/assets/img/bg_layered-peaks-haikei.svg);
}

#section2 {
  background-image: url(@/assets/img/bg_layered-peaks-reverse-haikei.svg);
}

#section1,
#section2 {
  height: 90vh;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
}

.home-heading {
  position: absolute;
  z-index: 1;
  top: 4rem;
  left: 6rem;
  color: #fff;
  background-color: rgba(0, 224, 127, 0.7);
  padding: 10px 30px;
  color: #040806;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 224, 127, 0.2);
}

.home-title {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3.5rem;
  text-shadow: 1px 1px 3px #6b6b6b;
  margin-bottom: 0;
}
.home-subtitle {
  font-size: 2rem;
  text-shadow: 1px 1px 3px #6b6b6b;
}

.intro-banner-img {
  position: absolute;
  top: 0;
  left: 0;
}

.main-content {
  margin-top: 270px;
}
.courses-title {
  color: #00e07f;
  font-family: "ProximaNova", "Roboto", sans-serif;
  font-weight: normal;
}
.courses-container {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 25px;
}

.card-container {
  border-radius: 5px;
  transition: 0.1s ease-in;
  box-shadow: 0 0 10px rgba(0, 224, 127, 0.3);
  position: relative;
}

.card-container:hover {
  transform: translateY(-5%);
  box-shadow: 0 0 10px rgba(0, 224, 127, 0.8);
}

.category-badge {
  position: absolute;
  top: 10px;
  left: 10px;
}

.green-badge {
  background-color: #00e07f !important;
  color: #040806;
}
.black-badge {
  background-color: #040806 !important;
}
.white-badge {
  background-color: #fbfae5 !important;
  color: #040806;
}
.blue-badge {
  background-color: #6184d8 !important;
}

.card-container img {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.card-content {
  text-align: left;
  background-color: #fff;
  padding: 15px 10px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}

.course-title {
  font-size: 0.9rem;
  margin-bottom: 0;
  color: #040806;
  font-weight: bold;
}

.fa-circle-check {
  color: #6184d8;
}

.course-description {
  font-size: 0.9rem;
  color: #6f7c8b;
}

/* Media queries */
@media only screen and (max-width: 1400px) {
  .container {
    max-width: 1320px !important;
  }

  .courses-container {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media only screen and (max-width: 1300px) {
  .container {
    max-width: 950px !important;
  }
  .home-heading {
    top: 2.4rem;
    left: 2rem;
  }

  .home-title {
    font-size: 2.8rem;
  }
  .home-subtitle {
    font-size: 1.5rem;
  }

  .main-content {
    margin-top: 200px !important;
  }
}

@media only screen and (max-width: 992px) {
  .container {
    max-width: 900px !important;
  }

  .courses-container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .home-heading {
    top: 3rem;
    left: 2rem;
  }

  .home-subtitle {
    display: none;
  }
}

@media only screen and (max-width: 992px) {
  .intro-banner {
    display: none;
  }

  .main-content {
    margin-top: 0 !important;
  }
}

@media only screen and (max-width: 696px) {
  .courses-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media only screen and (max-width: 600px) {
  .courses-container {
    grid-template-columns: 1fr;
  }
}
</style>