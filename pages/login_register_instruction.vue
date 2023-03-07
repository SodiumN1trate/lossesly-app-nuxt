<template>
    <div class="profile">
      <PageNavigation />
      <main>
        <div class="profile-container w-100 flex-column">
          <h2>Pamācība</h2>
          <div class="d-flex" style="gap: 50px;">
            <div class="d-flex flex-column" style="border-right: 2px solid orange; padding-right: 20px; width: 40%;">
              <a href="#register"><h5>Reģistrācija</h5></a>
              <a href="#log-in"><h5>Ieiet</h5></a>
              <a href="#forgot_password"><h5>Paroles maiņa</h5></a>
            </div>
            <div class="d-flex flex-column" style="gap: 50px;">
              <div id="register">
                <h4>Reģistrācija</h4>
                <p>Reģistrācijas lapā ir 4 lodziņi kuros vajag ierakstīt datus.</p>
                <p>Pirmajā - "Vārds'', jāieraksta savs vārds.</p>
                <img src="@/assets/images/first_name.png">
                <p>Otrajā lodziņā - ''Uzvārds'', jāraksta savs uzvārds.</p>
                <img src="@/assets/images/last_name.png">
                <p>Trešajā lodziņā - "E-pasts", jāieraksta savu e-pastu un pēdējā - "Parole", vajag ievadīt savu izvēlēto paroli.</p>
                <img src="@/assets/images/e_mail.png">
                <img src="@/assets/images/password.png">
                <p>Lai pabeigtu reģistrāciju jāatķeksē lodziņš "Es piekrītu lietotnes noteikumiem" un jāuzpiež uz pogas "Reģistrēties".</p>
                <img src="@/assets/images/terms_and_conditions.png">
                <img src="@/assets/images/register_button.png">
                <p>Ja profils ir jau ir izveidots varat uzpiest uz teksta "Esi reģistrējies? Ieiet profilā", kas jūs aizvedīs uz Log-in lapu.</p>
                <img src="@/assets/images/already_have_acc.png">
              </div>
              <div id="log-in">
                <h4>Ieiet</h4>
                <p>Pēc reģistrēšanās varat pāriet uz Log-in lapu kurā ir divi lodziņi kuros vajag ierakstīt savu izvēlēto e-pastu un paroli un jāuzpiež pogu "Ienākt".</p>
                <img src="@/assets/images/e_mail.png">
                <img src="@/assets/images/password.png">
                <img src="@/assets/images/login_button.png">
                <p>Opcionāli varat atķeksēt lodziņu "Atcerēties mani", kas saglabās log-in datus, lai nākošajās reizēs vairs nevajadzētu rakstīt savu e-pastu un paroli.</p>
                <img src="@/assets/images/remember_me.png">
                <p>Ja nēsat vēl reģistrējušies spiežat uz teksta "Nēesi reģistrējies? Izveidot profilu"</p>
                <img src="@/assets/images/make_an_acc.png">
              </div>
              <div id="forgot_password">
                <h4>Paroles maiņa</h4>
                <p>Ja esat aizmirsis/usi savu paroli spiežat uz teksta "Aizmirsi paroli?", kas jūs aizvedīs uz lapu kurā vajadzēs ierakstīt savu e-pastu ar kuru esat piereģistrējies, lai iegūtu linku uz paroles maiņas lapu. Uzpiežot uz iegūtā linka tiksiet pārvests uz paroles maiņas lapu kur vajadzēs ierakstīt savu jauno paroli un atkal atkārtoti šo pašu jauno paroli, pēc kā nospiežot pogu saglābāt tiks nomainīta lietotāja parole un lietotājs tiks pārsūtīts uz log-in lapu.</p>
                <img src="@/assets/images/password_change.png">
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
