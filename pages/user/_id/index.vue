<template>
  <div class="profile-user" v-if="user">
    <img class="profile-user-image" :src="user.avatar">
    <div class="profile-user-data">
      <div class="profile-user-data-field"><p>Vārds, uzvārds</p><p class="black">{{ user.name }} {{ user.surname }}</p></div>
      <div class="profile-user-data-field"><p>E-pasts</p><p class="black">{{ user.email }}</p></div>
      <div class="profile-user-sub-data">
        <div class="profile-user-data-field"><p>Loma</p><p class="black">Lietotājs</p></div>
        <div class="profile-user-data-field"><p>Reitings</p>
          <div class="user-rating">
            <p class="black">{{ user.rating }}</p>
            <img src="@/assets/vectors/star.svg" width="16px" height="16px">
          </div>
        </div>
      </div>
      <div class="profile-user-data-field"><p>Speciālitāte</p><p class="black">{{ user.specialities[0].name }}</p></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'UserProfileLayout',
  auth: true,
  data () {
    return {
      user: null
    }
  },
  mounted () {
    this.$axios.get('/users/' + this.$route.params.id).then((response) => {
      this.user = response.data.data
    })
  }
}
</script>
