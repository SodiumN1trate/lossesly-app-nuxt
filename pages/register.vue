<template>
  <div class="content">
    <img src="@/assets/images/logo.png" width="49px" height="60px">
    <div>
      <h1>Reģistrēties</h1>
      <br>
      <form>
        <label for="name">Vārds
          <input id="name" type="text" placeholder="Ierakstiet vādu">
        </label>
        <label for="surname">Uzvārds
          <input id="surname" type="text" placeholder="Ierakstiet uzvārdu">
        </label>
        <label for="email">E-pasts
          <input id="email" type="text" placeholder="Ierakstiet e-pastu">
        </label>
        <label for="password">Parole
          <input id="password" type="text" placeholder="Ierakstiet paroli">
        </label>
        <div>
          <label class="remember-me-container">Es piekrītu <a href="#">lietotnes noteikumi</a>
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
        </div>
        <button>Reģistrēties</button>
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
