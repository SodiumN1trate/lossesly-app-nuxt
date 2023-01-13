<template>
  <div class="profile-edit">
    <form @submit.prevent="submit">
      <label>Specialitāte
<!--          <div class="dropdown-input"><span>Izvēlēties specialitāti</span> <img src="@/assets/vectors/arrow_down.svg" width="18px" height="18px"></div>-->

          <select v-model="form.speciality_id" class="dropdown-input">
            <option value="0" disabled selected>Izvēlaties specialitāti:</option>
            <option :value="speciality.id" v-for="speciality in specialities" :key="speciality.id">{{ speciality.name }}</option>
          </select>
      </label>

      <label for="experience">Pieredzes apraksts
        <textarea id="experience" placeholder="Aprakstiet savu pieredzi" v-model="form.experience"></textarea>
      </label>
      <label class="file-upload">Upload
        <input type="file" multiple style="visibility: hidden;" @change="onFileChange"/>
        <div class="file-upload-input">
          <span>Izvēlēties attēlus</span>
          <span class="file-upload-button">Izvēlēties</span>
        </div>
      </label>
      <div class="attachments" v-if="form.attachments.length > 0">
        <h6 class="primary">Pielikumi</h6>
        <div v-for="(attachment, index) in form.attachments" :key="index">
          <span>{{ attachment.name }}</span><span></span>
          <svg @click="removeAttachment(index)"
               class="svg-icon"
               style="width: 14px; height: 14px;vertical-align: middle;fill: red;overflow: hidden; cursor: pointer"
               viewBox="0 0 1024 1024"
               xmlns="http://www.w3.org/2000/svg"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"  /></svg>
        </div>
      </div>
      <button class="short">Nosūtīt</button>
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
        speciality_id: 0,
        experience: null,
        attachments: []
      },
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
  },
  methods: {
    onFileChange (e) {
      console.log(e.target.files)
      for (const file in e.target.files) {
        this.form.attachments.push(e.target.files[file])
      }
      this.form.attachments.splice(-2)
      console.log(this.form.attachments)
    },
    removeAttachment (index) {
      this.form.attachments.splice(index, 1)
    },
    async submit () {
      this.errors = []
      this.success = null
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      const data = new FormData()
      for (const [key, value] of Object.entries(this.form)) { data.append(key, value) }
      await this.$axios.post('/specialist_application', data, config).then((response) => {
        this.success = 'Veiksmīgi rediģēti dati'
      }).catch((e) => {
        for (const error of Object.entries(e.response.data.errors)) {
          this.errors.push(error[1][0])
        }
      })
    }
  }
}
</script>
