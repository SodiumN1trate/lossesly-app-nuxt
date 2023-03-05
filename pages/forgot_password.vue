<template>
  <div class="content">
    <NuxtLink to="/"><img src="@/assets/images/logo.png" width="49px" height="60px"></NuxtLink>
    <div>
      <h4 class="primary">Aizmirsu paroli</h4>
      <br>
      <ul v-if="errors.length > 0">
        <li v-for="(error, index) in errors" :key="index" class="danger-text">{{ error }}</li>
      </ul>
      <form @submit.prevent="submit" class="auth-form">
        <p>Ievadiet sava profila e-pastu, lai mēs Jums uz e-pastu nosūtītu paroles atjaunošanas formu</p>
        <label for="email">E-pasts
          <input id="email" type="text" placeholder="Ierakstiet e-pastu" v-model="form.email">
        </label>
        <button>Nosūtīt</button>
        <p class="success-text">{{ success }}</p>
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
        email: null
      },
      errors: [],
      success: null
    }
  },
  methods: {
    async submit () {
      await this.$axios.post('/forgot_password', this.form).then((response) => {
        this.success = response.data.data
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
