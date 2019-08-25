<template>
  <div class="PagePrivate">
    <section-block class="PagePrivate_main">
      <header-content />
      <button-list class="-type-02" :items="socialLink" />
    </section-block>

    <section-block>
      <p>Welcome private page.</p>
      <p>coming soon.</p>
    </section-block>
  </div>
</template>

<script>
import { URL } from '@/assets/js/define'
import SectionBlock from '@/components/common/SectionBlock'
import ButtonList from '@/components/common/ButtonList'
import HeaderContent from '@/components/parts/HeaderContent'

export default {
  name: 'PagePrivate',
  components: {
    SectionBlock,
    ButtonList,
    HeaderContent
  },
  data() {
    return {
      socialLink: [URL.twitter, URL.github]
    }
  },
  head: {
    meta: [{ name: 'robots', content: 'noindex,nofollow,noarchive' }]
  }
}
</script>

<style lang="scss" scoped>
.PagePrivate {
  &_main {
    color: $COLOR_WHITE;
    background: $COLOR_CHARCOAL;
    text-align: center;
  }
}
</style>
