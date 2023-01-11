<template>
  <div class="profile-password-settings">
    <form>
      <label for="old_password">Vecā parole
        <input id="old_password" type="text" placeholder="Ierakstiet veco paroli">
      </label>
      <label for="new_password">Jaunā parole
        <input id="new_password" type="text" placeholder="Ierakstiet jauno paroli">
      </label>
      <label for="re_new_password">Atkārtoti jaunā parole
        <input id="re_new_password" type="text" placeholder="Ierakstiet atkārtoti jauno paroli">
      </label>
      <button class="short">Nosūtīt</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'ProfileLayout'
}
</script>
