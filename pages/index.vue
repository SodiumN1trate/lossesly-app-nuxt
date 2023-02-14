<template>
  <Tutorial />
</template>

<script>
export default {
  name: 'IndexPage',
  mounted () {
    this.$router.push('/login')
  }
}
</script>
