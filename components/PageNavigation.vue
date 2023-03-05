<template>
  <header>
    <div class="navigation">
      <NuxtLink to="/" class="logo">
        <img src="@/assets/images/logo.png" width="40px" height="49px">
        <span class="logo-text">Lossesly</span>
      </NuxtLink>

      <div class="social-media" v-if="$auth.user">
        <NuxtLink to="/filter">Atrast speciālistu</NuxtLink>
        <NuxtLink to="/profile"><img src="@/assets/vectors/profile.svg" width="40px"></NuxtLink>
      </div>
      <div class="social-media" v-else>
        <img src="@/assets/vectors/twitter.svg" width="20px">
        <img src="@/assets/vectors/facebook.svg" width="20px">
        <img src="@/assets/vectors/instagram.svg" width="20px">
      </div>
    </div>
    <div class="profile-banner">
      <h2>{{ title }}</h2>
    </div>
  </header>
</template>

<script>
export default {
  props: ['title']
}
</script>
