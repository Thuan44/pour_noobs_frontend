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
            <div class="card-container">
              <img src="@/assets/img/players/player1.png" alt class="w-100" />
              <div class="card-content">
                <h4 class="course-title">
                  <i class="fa-solid fa-circle-check me-1"></i>DOUBLELIFT
                </h4>
                <p class="mb-0 course-description">Level up sur League of Legends</p>
              </div>
            </div>
            <div class="card-container">
              <img src="@/assets/img/players/player2.png" alt class="w-100" />
              <div class="card-content">
                <h4 class="course-title">DOUBLELIFT</h4>
                <p class="mb-0 course-description">Level up sur League of Legends</p>
              </div>
            </div>
            <div class="card-container">
              <img src="@/assets/img/players/player3.png" alt class="w-100" />
              <div class="card-content">
                <h4 class="course-title">DOUBLELIFT</h4>
                <p class="mb-0 course-description">Level up sur League of Legends</p>
              </div>
            </div>
            <div class="card-container">
              <img src="@/assets/img/players/player6.png" alt class="w-100" />
              <div class="card-content">
                <h4 class="course-title">DOUBLELIFT</h4>
                <p class="mb-0 course-description">Level up sur League of Legends</p>
              </div>
            </div>
            <div class="card-container">
              <img src="@/assets/img/players/player7.png" alt class="w-100" />
              <div class="card-content">
                <h4 class="course-title">
                  <i class="fa-solid fa-circle-check me-1"></i>DOUBLELIFT
                </h4>
                <p class="mb-0 course-description">Level up sur League of Legends</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div id="section2"></div>
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
  font-family: "Roboto", sans-serif;
}
.courses-container {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 25px;
}

.card-container {
  border-radius: 5px;
  transition: 0.1s ease-in;
  box-shadow: 0 0 10px rgba(0, 224, 127, 0.2);
}

.card-container:hover {
  transform: translateY(-5%);
  box-shadow: 0 0 10px rgba(0, 224, 127, 0.8);
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