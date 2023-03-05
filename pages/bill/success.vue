<template>
  <div class="profile">
    <PageNavigation />
    <main>
      <div class="profile-container w-auto d-flex flex-column align-items-center">
        <h4 style="color: #E2571C">Paldies, maksājums nogāja veiksmīgi!</h4>
        <p>Pēc pāris sekundēm Jūs tiksiet pārnesti atpakaļ uz savu profilu</p>
        <img src="https://media.tenor.com/0JK1fHxqYGEAAAAC/loading.gif" width="50px" height="50px">
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
  mounted () {
    this.$axios.get('/user_jobs/payment/session_handle?session_id=' + this.$route.query.session_id + '&job_id=' + this.$route.query.job_id).then((response) => {
      setTimeout(() => {
        this.$router.push('/profile')
      }, 2000)
    }).catch(() => {
      this.$router.push('/bill/cancel')
    })
  }
}
</script>
