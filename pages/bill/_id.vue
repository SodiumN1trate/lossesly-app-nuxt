<template>
  <div class="profile" v-if="user_job">
    <PageNavigation />
    <main>
      <div class="profile-container w-auto d-flex flex-column">
        <h4>Čeks</h4>
        <div class="profile-content">
          <UserData :user="user_job.user_id" />
          <form @submit.prevent="submit" class="d-flex flex-column w-100 mt-4 gap-4">
            <h6>{{ user_job.job_name }}</h6>
            <label for="price" class="w-100">Summa par paveikto darbu
              <div class="d-flex justify-content-center align-items-center gap-2">
                <input id="price" type="text" placeholder="Ierakstiet problēmu" v-model="form.price">
                <h5>€</h5>
              </div>
            </label>
            <div>
              <button class="btn btn-primary" type="submit">Nosūtīt</button>
              <button class="btn btn-secondary" type="button">Skaidrā naudā</button>
            </div>
          </form>
          <h6 class="success-text">{{ success }}</h6>
          <ul v-if="errors.length > 0">
            <li v-for="(error, index) in errors" :key="index" class="danger-text">{{ error }}</li>
          </ul>
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
      form: {
        price: null
      },
      errors: [],
      success: null
    }
  },
  mounted () {
    this.$axios.get('/user_jobs/' + this.$route.params.id).then((response) => {
      this.user_job = response.data.data
      console.log(this.user_job)
    })
  },
  methods: {
    async submit () {
      this.errors = []
      await this.$axios.put('/set_bill/' + this.$route.params.id, this.form).then((response) => {
        this.success = 'Rēķins nosūtīts'
        setTimeout(() => {
          this.$router.push('/profile')
        }, 2000)
      }).catch((e) => {
        for (const error of Object.entries(e.response.data.errors)) {
          this.errors.push(error[1][0])
        }
      })
    }
  }
}
</script>
