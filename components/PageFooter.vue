<template>
  <footer class="d-flex flex-column justify-content-between">
    <div class="footer-content">
      <div>
        <h1>Šis ir skolas projekts!</h1>
        <p id="warning-desc">Šis projekts tiek veidots uz skolas uzdotā projekta pamata.Viss kas šeit atrodas nav īsts.</p>
      </div>

      <div>
        <h2>Kā tas darbojas?</h2>
        <div>
          <p>Kā pasūtīt speciālistu</p>
          <p>Kā kļūt par pasūtītāju</p>
          <p>Kā reģistrēties</p>
        </div>
      </div>

      <div>
        <h2>Kontakti</h2>
        <div>
          <p>25547939</p>
          <p>contact@lossesly.com</p>
        </div>
      </div>

      <div class="social-media">
        <img src="@/assets/vectors/twitter.svg" width="20px">
        <img src="@/assets/vectors/facebook.svg" width="20px">
        <img src="@/assets/vectors/instagram.svg" width="20px">
      </div>
    </div>
    <p id="copyrigth">© 2023 Lossesly. Visas tiesības aizsargātas.</p>
  </footer>
</template>

<style scoped>

p, h1, h2 {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 35px;
}

h2 {
  font-size: 27px;
}

p {
  font-size: 14px;
}

footer {
  height: 300px;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  padding: 8px 32px;
}

.footer-content > div {
  display: flex;
  flex-direction: column;
}

.footer-content > div > div {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-left: 16px;

}

h1,  h2 {
  color: #E2571C;
}

.social-media {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

#copyrigth {
  margin-top: 34px;
  text-align: center;
}

</style>
