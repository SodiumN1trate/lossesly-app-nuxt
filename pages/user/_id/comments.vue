<template>
  <div class="profile-user" v-if="user && comments">
    <div class="profile-content">
      <div class="reviews"  v-if="comments.length > 0">
        <div class="review" v-for="(comment, index) in comments" :key="index">
          <div>
            <img :src="comment.user.avatar" class="review-user-image">
            <p>{{ comment.created_at }}</p>
          </div>
          <div class="filter-specialist-card-data">
            <div style="display: flex; gap: 10px;">
              <h5>{{ comment.user.name }} {{ comment.user.surname }}</h5>
              <div class="user-rating">
                <p class="black">{{ comment.user.rating }}</p>
                <img src="@/assets/vectors/star.svg" width="16px" height="16px">
              </div>
            </div>
            <p style="font-size: 15px;">{{ comment.review }}</p>
          </div>
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
      <div v-else>
        Nav nevienas atsauksmes
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'UserProfileLayout',
  auth: true,
  data () {
    return {
      user: null,
      comments: [],
      links: []
    }
  },
  mounted () {
    this.$axios.get('/users/' + this.$route.params.id).then((response) => {
      this.user = response.data.data
    })

    this.$axios.get('/reviews/' + this.$route.params.id).then((response) => {
      this.comments = response.data.data
      this.links = response.data.meta.links
    })
  },
  methods: {
    nextPage (page) {
      this.$axios.get(`/reviews/${this.$route.params.id}?page=${page}`).then((response) => {
        this.comments = response.data.data
        this.links = response.data.meta.links
      })
    }
  }
}
</script>
