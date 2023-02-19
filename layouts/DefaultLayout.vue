<template>
  <div>
    <PageNavigation />
    <main>
      <Nuxt />
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
