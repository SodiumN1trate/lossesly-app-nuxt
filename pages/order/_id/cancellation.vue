<template>
  <div class="profile" v-if="user_job">
    <PageNavigation />
    <main class="w-50">
      <div class="profile-container w-auto d-flex flex-column w-50">
        <h4 style="color: red;">Darba atcelšana</h4>
        <UserData :user="user_job.expert.id === $auth.user.id ? user_job.user_id : user_job.expert" />
        <label for="experience">Pieredzes apraksts
          <textarea id="experience" placeholder="Aprakstiet savu pieredzi" v-model="form.reason"></textarea>
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
        <div class="d-flex" style="gap: 10px">
          <button class="btn btn-primary" @click="submit" type="submit">Nosūtīt</button>
          <NuxtLink :to="`/order/${user_job.id}`"><button class="btn btn-secondary" type="button">Atpakaļ</button></NuxtLink>
        </div>
        <h6 class="success-text">{{ success }}</h6>
        <ul v-if="errors.length > 0">
          <li v-for="(error, index) in errors" :key="index" class="danger-text">{{ error }}</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user_job: null,
      form: {
        reason: null,
        attachments: [],
        user_job_id: null
      },
      errors: [],
      success: null
    }
  },
  auth: true,
  created () {
    if (!this.$auth?.user) {
      this.$router.push('/login')
    }
  },
  mounted () {
    this.$axios.get('/user_jobs/' + this.$route.params.id).then((response) => {
      this.user_job = response.data.data
      this.form.user_job_id = this.user_job.id
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
      await this.$axios.post('/job_cancels', data, config).then((response) => {
        this.success = 'Pieprasījums nosūtīts'
        setTimeout(() => {
          this.$router.push('/profile/transactions')
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
