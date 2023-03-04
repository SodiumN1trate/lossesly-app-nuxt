<template>
  <div class="order-user-profile" v-if="user">
    <img :src="user.avatar" class="order-user-profile-image">
    <div>
      <div style="display: flex; gap: 10px;">
        <h5>{{ user.name }} {{ user.surname }}</h5>
        <div class="user-rating">
          <p class="black">{{ user.rating }}</p>
          <img src="@/assets/vectors/star.svg" width="16px" height="16px">
        </div>
      </div>
      <p><span v-for="(speciality, index) in user.specialities" :key="index">{{ index === user.specialities.length - 1 ? speciality.name : speciality.name + ', ' }}</span></p>
      <p class="black-50">Latvija, Rīga</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>
