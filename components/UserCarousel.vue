<template>
  <div class="carousel-main-container" v-if="users">
    <div @click="nextPage(false)">
      <img src="@/assets/vectors/arrow-left.svg" style="cursor: pointer" width="30px">
    </div>
    <div class="carousel" ref="carousel">
      <div v-for="(user, index) in users" :key="index" class="d-flex flex-column align-items-center text-center" style="cursor: pointer">
        <img :src="user.avatar" class="order-user-profile-image" style="border-radius: 50%;">
        <h5>{{ user.name }} {{ user.surname }}</h5>
        <p><span v-for="(speciality, index) in user.specialities" :key="index">{{ index === user.specialities.length - 1 ? speciality.name : speciality.name + ', ' }}</span></p>
      </div>
    </div>
    <div @click="nextPage(true)">
      <img src="@/assets/vectors/arrow-right.svg" style="cursor: pointer" width="30px">
    </div>
  </div>
</template>

<script>
export default {
  props: ['users'],
  data () {
    return {
      page: 0
    }
  },
  updated () {
    this.$refs.carousel.style.width = (this.$refs.carousel.children[0].clientWidth + 70) * 4 + 'px'
  },
  methods: {
    nextPage (direction) {
      this.$refs.carousel.scrollLeft += (this.$refs.carousel.children[0].clientWidth + 70) * (direction ? 1 : -1)
    }
  }
}
</script>

<style scoped>
.carousel {
  display: flex;
  gap: 70px;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.carousel div:first-child {
  margin-left: 35px;
}
.carousel div:last-child {
  margin-right: 35px;
}
.carousel-main-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
