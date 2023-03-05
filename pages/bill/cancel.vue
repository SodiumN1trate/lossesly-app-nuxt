<template>
  <div class="profile">
    <PageNavigation />
    <main>
      <div class="profile-container w-auto d-flex flex-column align-items-center">
        <h4 style="color: red;">Kaut kas nogāja greizi :(</h4>
        <p>Pēc pāris sekundēm Jūs tiksiet pārnesti atpakaļ uz savu profilu</p>
        <img src="https://media.tenor.com/0JK1fHxqYGEAAAAC/loading.gif" width="50px" height="50px">
      </div>
    </main>
  </div>
</template>

<script>
export default {
  created () {
    if (!this.$auth?.user) {
      this.$router.push('/login')
    }
  }
}
</script>
