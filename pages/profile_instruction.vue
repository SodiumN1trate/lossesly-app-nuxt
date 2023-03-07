<template>
    <div class="profile">
      <PageNavigation />
      <main>
        <div class="profile-container w-100 flex-column">
          <h2>Pamācība</h2>
          <div class="d-flex" style="gap: 50px;">
            <div class="d-flex flex-column" style="border-right: 2px solid orange; padding-right: 20px; width: 40%;">
              <a href="#profile"><h5>Profils</h5></a>
              <a href="#profile2"><h5>Profils</h5></a>
              <a href="#data_change"><h5>Datu labošana</h5></a>
              <a href="#password_change"><h5>Paroles maiņa</h5></a>
              <a href="#orders"><h5>Darijumi</h5></a>
              <a href="#log_out"><h5>Iziet</h5></a>
            </div>
            <div class="d-flex flex-column" style="gap: 50px;">
              <div id="profile">
                <h4>Profils</h4>
                <p>Profila lapā ir 6 sadaļas priekš lietotāja, kuras atbilst par dažādiem darījumiem.</p>
                <img src="@/assets/images/user_profile_sections.png">
              <div id="profile2">
                <h4>Profils</h4>
                <p>Sadaļā "Profils" var redzēt lietotāja datus(Vārds,uzvārds,e-pasts,loma,reitings un profila bilde).</p>
                <img src="@/assets/images/user_data.png">
              </div>
              <div id="data_change">
                <h4>Datu labošana</h4>
                <p>Sadaļa ”Datu labošana” atbilst par lietotāju datu maiņu (Vārds,uzvārds,e-pasts, profila bilde). Datu labošanas nodaļā varat mainīt savu vārdu, uzvārdu, e-pastu un bildi, lai to izdarītu katrā noteiktajā lauciņā ierakstiet jaunus datus. Lai nomainītu bildi spiežat uz krustiņa, kur pēctam varēsiet izvēlēties savu jauno bildi. Kad dati tiek ievadīti speižat uz pogas “Saglabāt”.</p>
                <img src="@/assets/images/data_change.png">
              </div>
              <div id="password_change">
                <h4>Paroles maiņa</h4>
                <p>Sadaļa “Paroles maiņa” atbilst par lietotāja paroles maiņu. Lai nomainītu paroli ir nepieciešams ievadīt savu veco paroli un tad jaunu paroli(jaunu paroli vajag atkartoti rakstīt).Kad visi lauki ir aizpildīti, spiežat uz pogas “Nosūtit”, lai saglabātu jauno paroli sistēmā.</p>
                <img src="@/assets/images/profile_password_change.png">
              </div>
              <div id="orders">
                <h4>Darijumi</h4>
                <p>Sadaļa “Darījumi” atbilst par jūsu pasūtījumu statusu (pelēks-nav izkatīts, sarkans-atcelts, zaļš-problēma risināta),kā arī specialists, sākuma un beigu datums, un cena. Ja noklikšķinat uz problēmas, atvērasies jauns logs, kurā varat apskatīt pilnu informāciju par savu problēmu un atcelt to, ja ir vajadzība. Ja nav ne kādu darījumu uz ekrāna būs piedavāts poga “Apskatīt specialīstus”.</p>
                <img src="@/assets/images/orders.png">
              </div>
              <div id="log_out">
                <h4>Iziet</h4>
                <p>Lai izietu no sava profila spiežat pogu "Iziet"</p>
                <img src="@/assets/images/log_out.png">
              </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
