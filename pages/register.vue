<template>
  <div class="content">
    <img src="@/assets/images/logo.png" width="49px" height="60px">
    <div>
      <h1>Reģistrēties</h1>
      <br>
      <form @submit.prevent>
        <label for="name">Vārds
          <input id="name" type="text" placeholder="Ierakstiet vādu" v-model="form.name">
        </label>
        <label for="surname">Uzvārds
          <input id="surname" type="text" placeholder="Ierakstiet uzvārdu" v-model="form.surname">
        </label>
        <label for="email">E-pasts
          <input id="email" type="email" placeholder="Ierakstiet e-pastu" v-model="form.email">
        </label>
        <label for="password">Parole
          <input id="password" type="password" placeholder="Ierakstiet paroli" v-model="form.password">
        </label>
        <div>
          <label class="remember-me-container">Es piekrītu <a href="#">lietotnes noteikumi</a>
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
        </div>
        <button @click="submit">Reģistrēties</button>
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
      }
    }
  },
  methods: {
    async submit () {
      this.form.password_rep = this.form.password
      await this.$axios.post('/register', this.form).then((response) => {
        alert('Veiksmīgi esat reģistrējušies!')
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
