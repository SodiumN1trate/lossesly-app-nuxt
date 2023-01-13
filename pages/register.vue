<template>
  <div class="content">
    <img src="@/assets/images/logo.png" width="49px" height="60px">
    <div>
      <h4 class="primary">Reģistrēties</h4>
      <br>
      <ul v-if="errors.length > 0">
        <li v-for="(error, index) in errors" :key="index" class="danger-text">{{ error }}</li>
      </ul>
      <form @submit.prevent="register" class="auth-form">
        <label for="name">Vārds
          <input id="name" type="text" placeholder="Ierakstiet vādu" v-model="form.name">
        </label>
        <label for="surname">Uzvārds
          <input id="surname" type="text" placeholder="Ierakstiet uzvārdu" v-model="form.surname">
        </label>
        <label for="email">E-pasts
          <input id="email" type="text" placeholder="Ierakstiet e-pastu" v-model="form.email">
        </label>
        <label for="password">Parole
          <input id="password" type="password" placeholder="Ierakstiet paroli" v-model="form.password">
        </label>
        <div>
          <label class="remember-me-container">Es piekrītu&nbsp;<a href="#"> lietotnes noteikumi</a>
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
        </div>
        <button>Reģistrēties</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'AuthLayout',
  data () {
    return {
      form: {
        name: null,
        surname: null,
        email: null,
        password: null,
        password_rep: null
      },
      errors: []
    }
  },
  methods: {
    async register () {
      this.form.password_rep = this.form.password
      await this.$axios.post('/register', this.form).then(() => {
        alert('Veiksmīgi esat reģistrējušies!')
        this.$router.push('/login')
      }).catch((e) => {
        this.errors = []
        for (const error of Object.entries(e.response.data.errors)) {
          this.errors.push(error[1][0])
        }
      })
    }
  }
}
</script>
