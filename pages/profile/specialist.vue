<template>
  <div class="profile-edit">
    <form>
      <label>Specialitāte
        <div class="dropdown-container">
          <div class="dropdown-input"><span>Izvēlēties specialitāti</span> <img src="@/assets/vectors/arrow_down.svg" width="18px" height="18px"></div>
        </div>
      </label>

      <label for="experience">Pieredzes apraksts
        <textarea id="experience" placeholder="Aprakstiet savu pieredzi"></textarea>
      </label>
      <label class="file-upload">Upload
        <input type="file" style="visibility: hidden;"/>
        <div class="file-upload-input">
          <span>Izvēlēties attēlus</span>
          <span class="file-upload-button">Izvēlēties</span>
        </div>
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
