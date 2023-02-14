<template>
  <div class="profile-edit">
    <form @submit.prevent="edit">
      <label for="name">Vārds
        <input id="name" type="text" placeholder="Ierakstiet vārdu" v-model="form.name">
      </label>
      <label for="surname">Uzvārds
        <input id="surname" type="text" placeholder="Ierakstiet uzvārdu" v-model="form.surname">
      </label>
      <label for="email">E-pasts
        <input id="email" type="text" placeholder="Ierakstiet uzvārdu" v-model="form.email">
      </label>
      <button class="short">Saglabāt</button>
      <h6 class="success-text">{{success}}</h6>
      <ul v-if="errors.length > 0">
        <li v-for="(error, index) in errors" :key="index" class="danger-text">{{ error }}</li>
      </ul>
    </form>
    <div class="profile-edit-change-photo">
      <img class="profile-user-image" :src="this.imagePreview">
      <label class="profile-user-image-icon">
        <input type="file" style="visibility: hidden;" @change="onFileChange"/>
        <img class="profile-user-image-icon" src="@/assets/vectors/profile_edit.svg" width="32px" height="32px">
      </label>
    </div>
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
        name: this.$auth.user.name,
        surname: this.$auth.user.surname,
        email: this.$auth.user.email,
        avatar: this.$auth.user.avatar
      },
      imagePreview: this.$auth.user.avatar,
      oldImage: null,
      errors: [],
      success: null
    }
  },
  mounted () {
    this.oldImage = this.form.avatar
  },
  methods: {
    async edit () {
      this.errors = []
      this.success = null
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      const data = new FormData()
      for (const [key, value] of Object.entries(this.form)) {
        if (key === 'avatar' && value === this.oldImage) { continue }
        data.append(key, value)
      }
      await this.$axios.post(`/users/${this.$auth.user.id}?_method=PUT`, data, config).then((response) => {
        this.success = 'Veiksmīgi rediģēti dati'
      }).catch((e) => {
        for (const error of Object.entries(e.response.data.errors)) {
          this.errors.push(error[1][0])
        }
      })
      await this.$auth.fetchUser()
    },
    onFileChange (e) {
      this.form.avatar = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        console.log(e.target.result)
        this.imagePreview = e.target.result
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }
}
</script>
