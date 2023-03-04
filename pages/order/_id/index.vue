<template>
  <div class="profile" v-if="user_job">
    <PageNavigation />
    <main>
      <div class="profile-container w-auto d-flex flex-column">
        <h4>Problēmas apraksts</h4>
        <div class="profile-content">
          <UserData :user="user_job.expert.id === $auth.user.id ? user_job.user_id : user_job.expert" />
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
        <div class="d-flex justify-content-between" style="gap: 10px">
          <div>
            <NuxtLink v-if="!is_expert" :to="`/bill/${user_job.id}`"><button class="btn btn-primary" type="button">Samaksāt</button></NuxtLink>
            <NuxtLink v-else :to="`/bill/${user_job.id}`"><button class="btn btn-primary" type="button">Izrakstīt rēķinu</button></NuxtLink>
            <NuxtLink to="/profile/transactions"><button class="btn btn-secondary" type="button">Atpakaļ</button></NuxtLink>
          </div>
          <NuxtLink :to="`/order/${user_job.id}/cancellation`"><button class="btn btn-danger" type="button">Atcelt darbu</button></NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user_job: null,
      is_expert: false
    }
  },
  mounted () {
    this.$axios.get('/user_jobs/' + this.$route.params.id).then((response) => {
      this.user_job = response.data.data
      this.is_expert = this.user_job.expert.id === this.$auth.user.id
    })
  }
}
</script>
