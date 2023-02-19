<template>
  <div class="profile">
    <PageNavigation />
    <main>
      <div class="profile-container">
        <div class="profile-navigation">
          <NuxtLink to="/profile" class="black-75 active">Profils</NuxtLink>
          <NuxtLink to="/profile/edit" class="black-75">Datu labošana</NuxtLink>
          <NuxtLink to="/profile/specialist" class="black-75">Kļūt par speciālistu</NuxtLink>
          <NuxtLink to="/profile/password_change" class="black-75">Proles maiņa</NuxtLink>
          <NuxtLink to="/profile/transactions" class="black-75">Darijumi</NuxtLink>
          <a @click="logout" class="black-75">Iziet</a>
        </div>
        <div class="profile-content">
          <Nuxt />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  created () {
    if (!this.$auth?.user) {
      this.$router.push('/login')
    }
  },
  methods: {
    logout () {
      this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>
