<template>
  <div v-show="isFontLoaded" class="Layout">
    <main class="Layout_main">
      <nuxt />
    </main>
    <site-footer />
  </div>
</template>

<script>
import SiteFooter from '@/components/layout/SiteFooter'

export default {
  name: 'Layout',
  components: {
    SiteFooter
  },
  data() {
    return {
      isFontLoaded: false
    }
  },
  mounted() {
    document.fonts.ready.then((fontFaceSet) => {
      this.isFontLoaded = true
    })
  }
}
</script>

<style lang="scss" scoped></style>
