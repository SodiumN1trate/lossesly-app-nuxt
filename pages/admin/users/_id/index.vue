<template>
  <div class="user-profile">
    <form>
      <UserData :user="user" v-if="user" />
      <label for="name">Vārds
        <input id="name" type="text" placeholder="Ierakstiet vārdu" v-model="form.name">
      </label>
      <label for="surname">Uzvārds
        <input id="surname" type="text" placeholder="Ierakstiet uzvārdu" v-model="form.surname">
      </label>
      <label for="email">E-pasts
        <input id="email" type="text" placeholder="Ierakstiet uzvārdu" v-model="form.email">
      </label>
        <b-form-group label="Loma:" v-slot="{ ariaDescribedby }" class="d-flex flex-wrap w-100 align-items-end flex-row">
          <b-form-radio-group
            v-model="form.role"
            class="d-flex flex-row flex-wrap"
            :aria-describedby="ariaDescribedby"
            :options="roles"
            value-field="name"
            text-field="name"
          ></b-form-radio-group>
        </b-form-group>
      <b-form-group label="Permisijas:" v-slot="{ ariaDescribedby }" class="w-100">
        <b-form-checkbox-group
          v-model="form.permissions"
          :options="permissions"
          value-field="id"
          text-field="name"
          style="width: 100%"
          class="d-flex flex-row flex-wrap"
          :aria-describedby="ariaDescribedby"
        ></b-form-checkbox-group>
      </b-form-group>
      <br>
<!--      <button class="btn btn-success" @click.prevent="submit(1)">Apstiprināt</button>-->
<!--      <button class="btn btn-danger" @click.prevent="submit(0)">Noraidīt</button>-->
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
        name: null,
        surname: null,
        email: null,
        roles: null,
        permissions: []
      },
      user: null,
      permissions: [],
      roles: [],
      errors: [],
      success: null
    }
  },
  async mounted () {
    await this.$axios.get(`/users/${this.$route.params.id}`).then((response) => {
      const data = response.data.data
      this.form.name = data.name
      this.form.surname = data.surname
      this.form.email = data.email
      this.form.roles = data.roles
      this.form.permissions = data.permissions.map((permission) => {
        return permission.id
      })
    })

    await this.$axios.get('/permissions').then((response) => {
      this.permissions = response.data
    })

    await this.$axios.get('/roles').then((response) => {
      this.roles = response.data
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
