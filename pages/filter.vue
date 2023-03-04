<template>
  <div>
    <PageNavigation title="Atrodi sev piemērotu speciālistu" />
    <main>
      <div class="filter-container">
        <label>Specialitāte
          <select v-model="form.speciality_id" class="dropdown-input">
            <option value="0" disabled selected>Izvēlaties specialitāti:</option>
            <option :value="speciality.id" v-for="speciality in specialities" :key="speciality.id">{{ speciality.name }}</option>
          </select>
        </label>
        <label for="location">Atrašanās vieta
          <input id="location" type="text" placeholder="Ievadiet atrašanās vietu" v-model="form.location">
        </label>
        <label for="rating">Vērējums
          <input id="rating" type="text" placeholder="Ievadiet vērtējumu" v-model="form.rating">
        </label>
        <label for="price">Cena
          <input id="price" type="text" placeholder="Ievadiet cenu" v-model="form.price">
        </label>
        <span class="filter-button" @click="onFilter()">Meklēt</span>
      </div>

      <div class="result-container">
        <h5 v-if="specialists.length === 0">Netika atrasti speciālisti :(</h5>
        <div class="filter-specialist-card" v-for="(specialist, index) in specialists" :key="index" @click="$router.push('/user/' + specialist.id)">
          <span class="filter-specialist-card-data-price bold">{{ specialist.specialities[0].pivot.price_per_hour }}€/h</span>
          <div class="filter-specialist-card-content">
            <img :src="specialist.avatar" class="filter-specialist-card-image">
            <div class="filter-specialist-card-data">
              <div style="display: flex; gap: 10px;">
                <h5>{{ specialist.name }} {{ specialist.surname }}</h5>
                <div class="user-rating">
                  <p class="black">{{ specialist.rating }}</p>
                  <img src="@/assets/vectors/star.svg" width="16px" height="16px">
                </div>
              </div>
              <p><span v-for="(speciality, index) in specialist.specialities" :key="index">{{ index === specialist.specialities.length - 1 ? speciality.name : speciality.name + ', ' }}</span></p>
              <p style="font-size: 15px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut pellentesque turpis. Nullam aliquam fermentum lorem id finibus. In eget auctor tellus, quis ornare mi. Vivamus tellus risus, pretium in scelerisque et, auctor non magna.</p>
              <p class="black-50">Latvija, Rīga</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      specialities: [],
      specialists: [],
      filter: null,
      form: {
        speciality_id: null,
        location: null,
        rating: null,
        price: null
      }
    }
  },
  async mounted () {
    await this.$axios.get('/specialities').then((response) => {
      this.specialities = response.data.data
    })

    await this.$axios.get('/specialists?' + this.filter).then((response) => {
      this.specialists = response.data.data
    })
  },
  methods: {
    async onFilter () {
      this.filter = ''
      for (const filter in this.form) {
        if (!this.form[filter]) { continue }
        this.filter += `${filter}=${this.form[filter]}&`
      }
      this.filter = this.filter.slice(0, -1)
      await this.$axios.get('/specialists?' + this.filter).then((response) => {
        this.specialists = response.data.data
      })
    }
  }
}
</script>
