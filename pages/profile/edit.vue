<template>
  <div class="profile-edit">
    <form>
      <label for="name">Vārds
        <input id="name" type="text" placeholder="Ierakstiet vārdu" value="John">
      </label>
      <label for="surname">Uzvārds
        <input id="surname" type="text" placeholder="Ierakstiet uzvārdu" value="Doe">
      </label>
      <label for="email">E-pasts
        <input id="email" type="text" placeholder="Ierakstiet uzvārdu" value="tests@gmail.com">
      </label>
      <button class="short">Saglabāt</button>
    </form>
    <div class="profile-edit-change-photo">
      <img class="profile-user-image" src="https://thispersondoesnotexist.com/image">
      <img class="profile-user-image-icon" src="@/assets/vectors/profile_edit.svg" width="32px" height="32px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'ProfileLayout'
}
</script>
