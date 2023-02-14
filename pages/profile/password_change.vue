<template>
  <div class="profile-password-settings">
    <form @submit.prevent="submit">
      <label for="old_password">Vecā parole
        <input id="old_password" type="password" placeholder="Ierakstiet veco paroli" v-model="form.old_password">
      </label>
      <label for="new_password">Jaunā parole
        <input id="new_password" type="password" placeholder="Ierakstiet jauno paroli" v-model="form.password">
      </label>
      <label for="re_new_password">Atkārtoti jaunā parole
        <input id="re_new_password" type="password" placeholder="Ierakstiet atkārtoti jauno paroli" v-model="form.password_confirmation">
      </label>
      <button class="short">Nosūtīt</button>
      <h6 class="success-text">{{success}}</h6>
      <ul v-if="errors.length > 0">
        <li v-for="(error, index) in errors" :key="index" class="danger-text">{{ error }}</li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'ProfileLayout',
  auth: true,
  data () {
    return {
      form: {
        old_password: null,
        password: null,
        password_confirmation: null
      },
      errors: [],
      success: null
    }
  },
  methods: {
    async submit () {
      this.errors = []
      this.success = null
      await this.$axios.post('/change_password', this.form).then((response) => {
        this.success = 'Parole nomainīta'
      }).catch((e) => {
        for (const error of Object.entries(e.response.data.errors)) {
          this.errors.push(error[1][0])
        }
      })
    }
  }
}
</script>
