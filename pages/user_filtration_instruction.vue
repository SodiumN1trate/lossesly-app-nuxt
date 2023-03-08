<template>
    <div class="profile">
      <PageNavigation />
      <main>
        <div class="profile-container w-100 flex-column">
          <h2>Pamācība</h2>
          <div class="d-flex" style="gap: 50px;">
            <div class="d-flex flex-column" style="border-right: 2px solid orange; padding-right: 20px; width: 60%;gap: 20px">
              <a href="#find_specialist"><h5>Speciālist atrašana</h5></a>
              <a href="#specialist_info"><h5>Speciālista informācija</h5></a>
              <a href="#book_a_specialist"><h5>Speciālista pieteikšana</h5></a>
              <a href="#problem_cancel"><h5>Problēmas atcelšana</h5></a>
            </div>
            <div class="d-flex flex-column" style="gap: 50px;">
              <div id="find_specialist">
                <h4>Speciālista atrašana</h4>
                <p>Lai atrastu sev piemērotu speciālistu spiežat uz teksta “Atrast speciālistu”, kas atrodas labās puses aukšējā stūrī pie profila ikonas.</p>
                <img src="@/assets/images/find_specialist.png">
                <p>Uzpiežot uz teksta “Atrast speciālistu” jūs tiksiet pārvests/a uz Filtrēšanas lapu, kur varēsiet izvēlēties sev piemērātāko speciālistu jūsu problēmai. Varat meklēt speciālistus arī ar filtrācijas sistēmu.</p>
                <img src="@/assets/images/filtration_system.png" width="700px" height="50px">
              </div>
              <div id="specialist_info">
                <h4>Speciālista informācija</h4>
                <p>Kad esat atraduši sev piemērotāko speciālistu spiežat uz speciālista kārtiņas, kas jūs pārvedīs uz speciālista profilu. Šeit jūs varat redzēt informāciju, kā speciālista vārdu, uzvārdu, e-pastu, lomu, reitingu un specialitāti.</p>
                <img src="@/assets/images/specialist_card.png">
                <img src="@/assets/images/specialist_profile.png" width="800px">
                <p>Uzpiežot uz teksta “Pieredzes apraksts” varēsiet redzēt speciālista pieredzes aprakstu.</p>
                <img src="@/assets/images/specialist_experience.png" width="800px">
                <p>Uzpiežot uz teksta “Atsauksmes” varēsiet redzēt atsauksmes par speciālistu.</p>
                <img src="@/assets/images/specialist_feedback.png" width="800px">
              </div>
              <div id="book_a_specialist">
                <h4>Speciālista pieteikšana</h4>
                <p>Lai pieteiktu speciālistu spiežat uz pogas “Pieteikt”, kas atrodas kreisajā apakšējā stūrī, speciālista profilā.</p>
                <img src="@/assets/images/book_a_specialist.png">
                <p>Uzspiežot uz pogas “Pieteikt” jūs tiksiet pārvests/a uz speciālista pieteikšanas formu, kur vajadzēs ierakstīt vajadzīgo informāciju jūsu risinājamai problēmai.</p>
                <img src="@/assets/images/book_a_specialist_card.png" width="700px">
                <p>Formā jāieraksta problēmu, problēmas aprakstu un opcionāli var pievienot attēlu. Kad visa informācija tiek aizpildīta spieža uz pogas “Nosūtīt”.</p>
              </div>
              <div id="problem_cancel">
                <h4>Problēmas atcelšana</h4>
                <p>Ja problēmū vairs nav vajadzības atrisināt varat doties uz savu profilu un uzspiest uz teksta “Darijumi”, kur redzēsiet visus savus pasūtījumus.</p>
                <img src="@/assets/images/ordered_jobs.png" width="800px">
                <p>Tālāk spiežat uz savu pasūtījumu ko vēlaties atcelt un spiežat uz pogas “Atcelt darbu”.</p>
                <img src="@/assets/images/ordered_jobs_cancel.png" width="800px">
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
</template>
