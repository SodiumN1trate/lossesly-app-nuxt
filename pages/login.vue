<template>
  <div class="content">
    <img src="@/assets/images/logo.png" width="49px" height="60px">
    <div>
      <h1>Ieiet</h1>
      <br>
      <form>
        <label for="email">E-pasts
          <input id="email" type="text" placeholder="Ierakstiet e-pastu">
        </label>
        <label for="password">Parole
          <input id="password" type="text" placeholder="Ierakstiet paroli">
        </label>
        <div>
          <label class="remember-me-container">Atcerēties mani
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <a href="#">Aizmirsi paroli?</a>
        </div>
        <button>Ienākt</button>
        <span>Neesi reģistrējies? <a href="#">Izveidot profilu</a></span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'AuthLayout',
  async created () {
    // await this.$axios.$get('asd')
  }
}
</script>
