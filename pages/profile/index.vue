<template>
  <div class="profile-user">
    <img class="profile-user-image" :src="$auth.user.avatar">
    <div class="profile-user-data">
      <div class="profile-user-data-field"><p>Vārds, uzvārds</p><p class="black">{{ $auth.user.name }} {{ $auth.user.surname }}</p></div>
      <div class="profile-user-data-field"><p>E-pasts</p><p class="black">{{ $auth.user.email }}</p></div>
      <div class="profile-user-sub-data">
        <!-- TODO -->
        <div class="profile-user-data-field"><p>Loma</p><p class="black">Lietotājs</p></div>
        <div class="profile-user-data-field"><p>Reitings</p>
          <div class="user-rating">
            <p class="black">{{ $auth.user.rating }}</p>
            <img src="@/assets/vectors/star.svg" width="16px" height="16px">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'ProfileLayout',
  auth: true,
  mounted () {
    console.log(this.$auth.user)
  }
}
</script>
