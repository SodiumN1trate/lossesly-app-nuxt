<template>
  <div class="profile" v-if="user_job">
    <PageNavigation />
    <main>
      <div class="profile-container w-auto d-flex flex-column">
        <div class="profile-content">
          <UserData :user="user_job.expert" />
          <div class="d-flex flex-column gap-5 mt-3">
            <div class="d-flex flex-column gap-1">
              <h2>{{ user_job.job_name }}</h2>
              <p>{{ user_job.job_description }}</p>
            </div>
            <div class="order-images">
              <img v-for="(attachment, index) in user_job.attachments" :key="index" :src="attachment.url">
            </div>
          </div>
        </div>
        <NuxtLink to="/profile"><button>Atpakaļ</button></NuxtLink>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user_job: null
    }
  },
  mounted () {
    this.$axios.get('/user_jobs/' + this.$route.params.id).then((response) => {
      this.user_job = response.data.data
      console.log(this.user_job)
    })
  }
}
</script>
