<template>
  <div>
      <h1>Composant: AdminDashboard</h1>
      {{ autorizedText }}
  </div>
</template>

<script>
import { ui } from '@/externalization/ui'
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    if(this.isAdmin == true) {
        return {
          autorizedText: ui.AUTHORIZED_TEXT
        }
      } else {
          autorizedText: ui.UNAUTHORIZED_TEXT
      }
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>