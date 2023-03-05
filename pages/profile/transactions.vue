<template>
  <div class="profile-transactions">
    <table v-if="data.length > 0">
      <tr>
        <th>Status</th>
        <th>Specialitāte</th>
        <th>Sākuma datums</th>
        <th>Beigu datums</th>
        <th>Cena</th>
      </tr>
      <tr v-for="(row, index) in data" :key="index" @click="$router.push('/order/' + row.id)">
        <td style="width: 100px"><div class="dot-green" :style="{ backgroundColor: row.status.color }"><p>{{ row.status.name }}</p></div></td>
        <td>{{ row.expert.name }} {{ row.expert.surname }}</td>
        <td>{{ row.started }}</td>
        <td>{{ row.end }}</td>
        <td>{{ row.price ? row.price + '€' : '' }}</td>
      </tr>
    </table>
    <div class="text-center" v-else>
      Nav vēl neviena darijuma :( <br>
      <NuxtLink to="/filter">Atrast speciālistu</NuxtLink>
    </div>
    <div class="pagination" v-if="links.length > 3">
<!--      <i class="pagination-button bi bi-caret-left"></i>-->
      <div v-for="(link, index) in links" :key="index">
        <p
          class="pagination-button"
          :class="{'pagination-button-active': link.active }"
          v-if="!['pagination.previous', 'pagination.next'].includes(link.label)"
          @click="nextPage(link.label)"
        >{{ link.label }}</p>
      </div>
<!--      <i class="pagination-button bi bi-caret-right"></i>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'ProfileLayout',
  auth: true,
  data () {
    return {
      data: [],
      links: []
    }
  },
  mounted () {
    this.$axios.get('/user_jobs').then((response) => {
      this.data = response.data.data
      this.links = response.data.meta.links
    })
  },
  methods: {
    nextPage (page) {
      this.$axios.get('/user_jobs?page=' + page).then((response) => {
        this.data = response.data.data
        this.links = response.data.meta.links
      })
    }
  }
}
</script>

<style>
.dot-green {
  transition: .5s;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.dot-green p {
  margin: 0;
  padding: 0;
  display: none;
  position: absolute;
}

.dot-green:hover {
  border-radius: 3px;
  width: 100%;
}

.dot-green:hover p {
  display: initial;
}
</style>
