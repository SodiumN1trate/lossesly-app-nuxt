<template>
  <div class="content">
    <NuxtLink to="/"><img src="@/assets/images/logo.png" width="49px" height="60px"></NuxtLink>
    <div>
      <h4 class="primary">Ieiet</h4>
      <br>
      <ul v-if="errors.length > 0">
        <li v-for="(error, index) in errors" :key="index" class="danger-text">{{ error }}</li>
      </ul>
      <form @submit.prevent="login" class="auth-form">
        <label for="email">E-pasts
          <input id="email" type="text" placeholder="Ierakstiet e-pastu" v-model="form.email">
        </label>
        <label for="password">Parole
          <input id="password" type="password" placeholder="Ierakstiet paroli" v-model="form.password">
        </label>
        <div>
          <label class="remember-me-container">Atcerēties mani
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <a href="/forgot_password">Aizmirsi paroli?</a>
        </div>
        <button>Ienākt</button>
        <span>Neesi reģistrējies? <a href="/register">Izveidot profilu</a></span>
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
        email: null,
        password: null
      },
      errors: []
    }
  },
  methods: {
    async login () {
      await this.$auth.loginWith('local', { data: this.form }).then((data) => {
        this.$auth.strategy.token.set(data.data.access_token)
        this.$auth.strategy.token.sync()
        this.$auth.setUser(data.data.user)
        this.$router.push('/profile')
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
