<template>
  <div>
      {{ welcomeMessage }}
  </div>
</template>

<script>
import { ui } from '@/externalization/ui'
export default {
  props: {
    initialMessage: {
      type: String,
      default: ui.WELCOME_MESSAGE
    }
  },
  data () {
    return {
      welcomeMessage: this.initialMessage
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
