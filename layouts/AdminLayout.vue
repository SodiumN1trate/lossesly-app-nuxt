<template>
  <div class="profile">
    <PageNavigation />
    <main>
      <div class="profile-container">
        <div class="profile-navigation">
          <div>
            <NuxtLink to="/admin/users" class="black-75 active">Lietotāji</NuxtLink>
            <NuxtLink to="/admin/applications" class="black-75">Iesniegumi</NuxtLink>
            <NuxtLink to="/admin/user_jobs" class="black-75">Darba pieprasījumi</NuxtLink>
            <NuxtLink to="/admin/job_cancels" class="black-75">Darbu atcelšana</NuxtLink>
<!--            <NuxtLink to="/profile/edit" class="black-75">Atbalsts</NuxtLink>-->
            <NuxtLink to="/admin/specialities" class="black-75">Specialitātes</NuxtLink>
          </div>
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
