<template>
  <div class="profile">
    <PageNavigation />
    <main>
      <div class="profile-container w-auto">
        <div class="profile-content">
          <UserData :user="user" />
          <form @submit.prevent="submit" class="d-flex flex-column w-100 mt-4 gap-4">
            <label for="job_name" class="w-100">Problēma
              <input id="job_name" type="text" placeholder="Ierakstiet problēmu" v-model="form.job_name">
            </label>
            <label for="job_description">Problēmas apraksts
              <textarea id="job_description" placeholder="Aprakstiet savu problēmu" v-model="form.job_description"></textarea>
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
            <h6 class="success-text">{{success}}</h6>
            <ul v-if="errors.length > 0">
              <li v-for="(error, index) in errors" :key="index" class="danger-text">{{ error }}</li>
            </ul>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: null,
      form: {
        job_description: null,
        job_name: null,
        attachments: [],
        expert_id: this.$route.params.id
      },
      errors: [],
      success: null
    }
  },
  mounted () {
    this.$axios.get('/users/' + this.$route.params.id).then((response) => {
      this.user = response.data.data
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
      for (const [key, value] of Object.entries(this.form)) {
        if (key === 'attachments') {
          value.forEach((file, index) => {
            data.append(`attachments[${index}]`, file)
          })
        } else {
          data.append(key, value === 0 || value === null ? '' : value)
        }
      }
      await this.$axios.post('/user_jobs', data, config).then((response) => {
        this.success = 'Pieprasījums nosūtīts'
        setTimeout(() => {
          this.$router.push(`/order/${response.data.data.id}`)
        }, 2000)
      }).catch((e) => {
        for (const error of Object.entries(e.response.data.errors)) {
          this.errors.push(error[1][0])
        }
      })
    }
  }
}
</script>
