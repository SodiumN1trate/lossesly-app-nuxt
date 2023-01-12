<template>
  <div class="content">
    <img src="@/assets/images/logo.png" width="49px" height="60px">
    <div>
      <h1>Ieiet</h1>
      <br>
      <form @submit.prevent>
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
          <a href="#">Aizmirsi paroli?</a>
        </div>
        <button @click="submit">Ienākt</button>
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
      }
    }
  },
  methods: {
    async submit () {
      await this.$axios.post('/login', this.form).then((respones) => {
        alert('You\'ve loged in!')
      }).catch((e) => {
        for (const [key, value] of Object.entries(e.response.data.errors)) {
          alert(value[0])
          console.log(key)
        }
      })
    }
  }
}
</script>
