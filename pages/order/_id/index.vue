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
            <template v-if="is_expert && user_job.status.id === 1">
              <button class="btn btn-success" type="button" @click="acceptJob(1)">Apstiprināt</button>
              <button class="btn btn-danger" type="button" @click="acceptJob(0)">Noraidīt</button>
            </template>
            <button v-else-if="is_expert && user_job.status.id === 2" class="btn btn-success" type="button" @click="changeJobStatus(1)">Sākt darbu</button>
            <button v-else-if="is_expert && user_job.status.id === 3 " class="btn btn-warning" type="button" @click="changeJobStatus(0)">Beigt darbu</button>
            <NuxtLink v-else-if="is_expert && user_job.status.id === 5" :to="`/bill/${user_job.id}`"><button class="btn btn-primary" type="button">Izrakstīt rēķinu</button></NuxtLink>
            <button v-if="!is_expert" class="btn btn-primary" @click="pay" type="button">Samaksāt</button>
            <NuxtLink to="/profile/transactions"><button class="btn btn-secondary" type="button">Atpakaļ</button></NuxtLink>
          </div>
          <NuxtLink v-if="!is_expert" :to="`/order/${user_job.id}/cancellation`"><button class="btn btn-danger" type="button">Atcelt darbu</button></NuxtLink>
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
  created () {
    if (!this.$auth?.user) {
      this.$router.push('/login')
    }
  },
  mounted () {
    this.$axios.get('/user_jobs/' + this.$route.params.id).then((response) => {
      this.user_job = response.data.data
      this.is_expert = this.user_job.expert.id === this.$auth.user.id
    })
  },
  methods: {
    pay () {
      this.$axios.get('/user_jobs/payment/session_create/' + this.$route.params.id).then((response) => {
        window.location.href = response.data.data.url
      }).catch((e) => {
        alert(e.response.data.data)
      })
    },
    changeJobStatus (status) {
      this.$axios.get(`/user_jobs/${status ? 'start' : 'end'}/${this.$route.params.id}`).then((response) => {
        this.user_job = response.data.data
      }).catch((e) => {
        alert(e.response.data.data)
      })
    },
    acceptJob (status) {
      this.$axios.get(`/user_jobs/${status ? 'accept' : 'decline'}/${this.$route.params.id}`).then((response) => {
        this.user_job = response.data.data
      }).catch((e) => {
        alert(e.response.data.data)
      })
    }
  }
}
</script>
