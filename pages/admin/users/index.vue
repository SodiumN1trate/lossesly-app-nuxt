<template>
  <div class="profile-user">
    <div class="d-flex flex-column w-100">
      <b-table striped hover :items="items" :fields="fields">
        <template #cell(operations)="data">
          <img
            @click="deleteRow(data.item.id)"
            style="cursor: pointer"
            class="icons"
            src="https://www.pngfind.com/pngs/m/99-992375_png-file-delete-icon-svg-transparent-png.png"
            width="20px"
            height="25px"
          >
          <NuxtLink :to="`/admin/users/${data.item.id}`">
            <img
              style="cursor: pointer; margin-left: 10px"
              class="icons"
              src="@/assets/images/edit_icon.png"
              width="25px"
              height="25px"
            >
          </NuxtLink>
        </template>
      </b-table>
      <div class="d-flex flex-row" style="gap: 10px">
        <div v-for="(link, index) in links" :key="index">
          <p
            class="pagination-button"
            :class="{'pagination-button-active': link.active }"
            v-if="!['pagination.previous', 'pagination.next'].includes(link.label)"
            @click="nextPage(link.label)"
          >{{ link.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'AdminLayout',
  auth: true,
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: 'Vārds'
        },
        {
          key: 'surname',
          label: 'Uzvārds'
        },
        {
          key: 'email',
          label: 'E-pasts'
        },
        {
          key: 'operations',
          label: 'Darbības'
        }
      ],
      items: [],
      links: []
    }
  },
  created () {
    this.$axios.get('/users').then((response) => {
      this.items = response.data.data
      this.links = response.data.meta.links
    })
  },
  methods: {
    nextPage (page) {
      this.$axios.get('/users?page=' + page).then((response) => {
        this.items = response.data.data
        this.links = response.data.meta.links
      })
    },
    deleteRow (id) {
      if (!confirm('Vai pa tiešām vēlaties idzēst?')) { return 0 }
      this.$axios.delete('/users/' + id).then((response) => {
        this.nextPage(1)
      })
    }
  }
}
</script>
