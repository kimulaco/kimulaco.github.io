<template>
  <div class="Layout">
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
  }
}
</script>

<style lang="scss" scoped>
.Layout {
  &_main {
    padding-bottom: 30px;
  }
}
</style>
