<template>
  <div class="profile-user">
    <img class="profile-user-image" src="https://thispersondoesnotexist.com/image">
    <div class="profile-user-data">
      <div class="profile-user-data-field"><p>Vārds, uzvārds</p><p class="black">John Doe</p></div>
      <div class="profile-user-data-field"><p>E-pasts</p><p class="black">tests@gmail.com</p></div>
      <div class="profile-user-sub-data">
        <div class="profile-user-data-field"><p>Loma</p><p class="black">Lietotājs</p></div>
        <div class="profile-user-data-field"><p>Reitings</p>
          <div class="user-rating">
            <p class="black">3,5</p>
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
  layout: 'ProfileLayout'
}
</script>
