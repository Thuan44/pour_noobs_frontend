<template>
  <div id="home">
    <div class="container pt-4">
      <div class="intro-banner w-100 position-relative">
        <div class="home-heading">
          <h1 class="home-title">Pour tous les noobs...</h1>
          <p class="mb-0 text-start home-subtitle">...qui en on marre d'être des noobs.</p>
        </div>
        <img src="@/assets/img/intro-banner_gotaga.png" alt="Gotaga" class="intro-banner-img w-100" />
      </div>
      <main class="main-content">
        <h3 class="text-start courses-title">Toutes les formations</h3>
        <hr />
        <div class="courses-container mt-4">
          <div class="card-container">
            <img src="@/assets/img/players/player1.png" alt class="w-100" />
          </div>
          <div class="card-container">
            <img src="@/assets/img/players/player1.png" alt class="w-100" />
          </div>
          <div class="card-container">
            <img src="@/assets/img/players/player1.png" alt class="w-100" />
          </div>
          <div class="card-container">
            <img src="@/assets/img/players/player1.png" alt class="w-100" />
          </div>
          <div class="card-container">
            <img src="@/assets/img/players/player1.png" alt class="w-100" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";

export default {
  name: "Home",
  components: {},
  setup() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap");

#home {
  height: 90vh;
  background-image: url(@/assets/img/bg_layered-peaks-haikei.svg);
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
  font-family: "Roboto", sans-serif;
}
.courses-container {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 25px;
}

.card-container:hover {
  transform: translateY(10);
}

/* Media queries */
@media only screen and (max-width: 1400px) {
  .container {
    max-width: 1320px !important;
  }
}

@media only screen and (max-width: 1300px) {
  .container {
    max-width: 1000px !important;
  }
  .home-heading {
    top: 2.6rem;
    left: 2rem;
  }

  .home-title {
    font-size: 3rem;
  }
  .home-subtitle {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 992px) {
  .container {
    max-width: 900px !important;
  }

  .home-heading {
    top: 3rem;
    left: 2rem;
  }

  .home-subtitle {
    display: none;
  }
}
</style>