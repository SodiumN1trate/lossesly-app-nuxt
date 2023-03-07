<template>
  <div class="user-profile">
    <form>
      <UserData :user="user" v-if="user" />
      <label>Specialitāte
        <select v-model="form.speciality_id" class="dropdown-input" disabled>
          <option :value="speciality.id" v-for="speciality in specialities" :key="speciality.id">{{ speciality.name }}</option>
        </select>
      </label>
      <label for="experience">Pieredzes apraksts
        <textarea id="experience" placeholder="Aprakstiet savu pieredzi" v-model="form.experience" disabled></textarea>
      </label>
      <h6>Status: <strong>{{ !form.status ? 'Nav apstiprināts' : 'Apstiprināts'   }}</strong></h6>
      <div class="order-images">
        <img v-for="(attachment, index) in form.attachments" :key="index" :src="attachment.url">
      </div>
      <br>
      <button class="btn btn-success" @click.prevent="submit(1)">Apstiprināt</button>
      <button class="btn btn-danger" @click.prevent="submit(0)">Noraidīt</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'AdminLayout',
  auth: true,
  data () {
    return {
      form: {
        speciality_id: null,
        experience: null,
        attachments: [],
        status: null
      },
      user: null,
      specialities: [],
      errors: [],
      success: null
    }
  },
  async mounted () {
    await this.$axios.get('/specialities').then((response) => {
      this.specialities = response.data.data
    }).catch((e) => {
      console.log(e.response)
    })

    await this.$axios.get(`/specialist_application/${this.$route.params.id}`).then((response) => {
      this.form.attachments = response.data.data.attachments
      this.form.experience = response.data.data.experience
      this.form.speciality_id = response.data.data.speciality.id
      this.form.status = response.data.data.status
      this.user = response.data.data.user
    })
  },
  methods: {
    async submit (status) {
      await this.$axios.get(`/specialist_application/${this.$route.params.id}/${status}`).then((response) => {
        console.log(status)
        this.form.attachments = response.data.data.attachments
        this.form.experience = response.data.data.experience
        this.form.speciality_id = response.data.data.speciality.id
        this.form.status = response.data.data.status
        this.user = response.data.data.user
      })
    }
  }
}
</script>
