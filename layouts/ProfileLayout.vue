<template>
  <div>
    <PageNavigation />
    <main>
      <div class="profile-container">
        <div class="profile-navigation">
          <NuxtLink to="/profile" class="black-75 active">Profils</NuxtLink>
          <NuxtLink to="/profile/edit" class="black-75">Datu labošana</NuxtLink>
          <NuxtLink to="/profile/specialist" class="black-75">Kļūt par speciālistu</NuxtLink>
          <NuxtLink to="/profile/password_change" class="black-75">Proles maiņa</NuxtLink>
          <NuxtLink to="/profile/transactions" class="black-75">Darijumi</NuxtLink>
        </div>
        <div class="profile-content">
          <Nuxt />
        </div>
      </div>
    </main>
  </div>
</template>
