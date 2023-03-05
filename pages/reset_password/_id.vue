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
        <label for="password">Ievadiet jauno paroli
          <input id="password" type="password" placeholder="Ierakstiet jauno paroli" v-model="form.password">
        </label>
        <label for="password_confirmation">Ievadiet atkārtoti jauno paroli
          <input id="password_confirmation" type="password" placeholder="Ierakstiet atkārtoti jauno paroli" v-model="form.password_confirmation">
        </label>
        <button>Mainīt</button>
        <h6 class="success-text">{{ success }}</h6>
        <p v-if="success">Jūs pēc dažām sekundēm tiksiet novirzīti uz pieslēgšanās lapu</p>
        <img v-if="success" src="https://media.tenor.com/0JK1fHxqYGEAAAAC/loading.gif" width="50px" height="50px" style="margin-left: auto; margin-right: auto">
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
        password: null,
        password_confirmation: null
      },
      errors: [],
      success: null
    }
  },
  methods: {
    async submit () {
      await this.$axios.post(`/reset_password/${this.$route.params.id}?expires=${this.$route.query.expires}&signature=${this.$route.query.signature}`, this.form).then((response) => {
        this.success = response.data.data
        setTimeout(() => {
          this.$router.push('/login')
        }, 2000)
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
