<template>
  <div class="profile-user" v-if="user">
    <div class="profile-content" v-if="user.applications">
      <p>{{ user.applications.experience }}</p>
      <div class="order-images">
        <img v-for="(attachment, index) in user.applications.attachments" :key="index" :src="attachment.url">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'UserProfileLayout',
  auth: true,
  data () {
    return {
      user: null
    }
  },
  mounted () {
    this.$axios.get('/users/' + this.$route.params.id).then((response) => {
      this.user = response.data.data
    })
  }
}
</script>
