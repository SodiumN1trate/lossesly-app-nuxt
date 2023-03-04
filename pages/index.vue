<template>
  <div>
    <header>
      <div class="navigation">
        <div class="logo">
          <img src="@/assets/images/logo.png" width="40px" height="49px">
          <span class="logo-text">Lossesly</span>
        </div>

        <div class="social-media">
          <NuxtLink to="/filter">Atrast speciālistu</NuxtLink>
          <img src="@/assets/vectors/twitter.svg" width="20px">
          <img src="@/assets/vectors/facebook.svg" width="20px">
          <img src="@/assets/vectors/instagram.svg" width="20px">
        </div>
      </div>
    </header>
    <main>
      <div class="main-banner">
        <div>
          <div>
            <h1 class="black">Atrodi sev piemērotu</h1>
            <h1 class="primary">speciālistu!</h1>
          </div>
          <p class="black-75">Mēs Jums palīdzēsim atrast piemērotu speciālistu!</p>
          <div class="d-flex mt-5" style="gap: 20px;">
            <div class="button">
              Ieiet
            </div>
            <div class="button">
              Reģistrēties
            </div>
          </div>
          <div class="arrow-box">
            <img src="@/assets/vectors/arrow.svg">
          </div>
        </div>
        <img src="@/assets/vectors/banner.svg" width="500px">
      </div>
      <div class="banner-2">
        <div>
          <img src="@/assets/vectors/specialist.svg">
          <p>Speciālistu paveikto darbu kvalitāte tiek pārbaudīta, kā arī pasūtītāji paši var novērtēt paveikto darbu.</p>
        </div>
        <div>
          <img src="@/assets/vectors/card.svg">
          <p>Apmaksa par paveikto darbu ir iespējama tikai tad, kad pasūtītājs ir saņēmis pakalpojumu un ir apmierināts ar to.</p>
        </div>
        <div>
          <img src="@/assets/vectors/timer.svg">
          <p>Pasūtītājs ar speciālistu paši var vienoties par pakalpojuma sniegšanas laiku.</p>
        </div>
      </div>
      <div class="banner-4 d-flex flex-column justify-content-center align-items-center" style="gap: 50px">
        <h2>Populārākie speciālisti</h2>
        <UserCarousel :users="users" v-if="users" />
      </div>
      <div class="banner-3" ref="banner3">
        <div>
          <h2>{{ numbers[0] }}</h2>
          <p>Izdarītie<br>pasūtījumi</p>
        </div>
        <div>
          <h2>{{ numbers[1] }}</h2>
          <p>Izdarītie<br>pasūtījumi</p>
        </div>
        <div>
          <h2>{{ numbers[2] }}</h2>
          <p>Portāla<br>apmeklējums 24h</p>
        </div>
      </div>
<!--      <div class="banner-4 d-flex flex-column justify-content-center align-items-center" style="gap: 50px">-->
<!--        <h2>Populārākie speciālisti</h2>-->
<!--        <UserCommentCarousel :users="users" v-if="users" />-->
<!--      </div>-->
    </main>
    <PageFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      users: [],
      statistics: [100, 2220, 1000],
      numbers: [0, 0, 0],
      scrolled: false
    }
  },
  mounted () {
    this.$axios.get('/specialists').then((response) => {
      this.users = response.data.data
    })
    window.addEventListener('scroll', () => {
      if (this.scrolled) { return 0 }
      const position = this.$refs.banner3.getBoundingClientRect()
      if (position.top < window.innerHeight && position.bottom >= 0) {
        this.iterateNumbers(5000)
        this.scrolled = true
      }
    })
  },
  methods: {
    async iterateNumbers (time) {
      for (let i = 0; i < time; i++) {
        for (let y = 0; y < this.numbers.length; y++) {
          if (this.numbers[y] === this.statistics[y]) {
            continue
          }
          this.numbers[y] += 1
          this.$forceUpdate()
          await new Promise(resolve => setTimeout(resolve, 1))
        }
      }
    }
  }
}
</script>

<style>
.main-banner {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 100px;
}

.main-banner h1 {
  font-weight: 600;
}

.button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 65px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: linear-gradient(90deg, #F06023 0%, #FFA524 100%);
  border-radius: 13px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 20px;
  color: #FFFFFF;
}

.arrow-box {
  margin-top: 100px;
  width: 50%;
  display: flex;
  justify-content: center;
}

.arrow-box img {
  animation-name: hover;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.banner-4 {
  margin-top: 400px;
}

.banner-2, .banner-3 {
  margin-top: 400px;
  background-image: url("../assets/images/banner2.png");
  width: 100%;
  height: 450px;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
}

.banner-3 {
  background-image: url("../assets/images/banner3.png") !important;
  gap: 100px;
  margin-bottom: 200px;
}

.banner-2 div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  text-align: center;
  gap: 20px;
}

.banner-3 div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

@keyframes hover {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(75px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
