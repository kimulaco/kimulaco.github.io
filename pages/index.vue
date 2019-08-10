<template>
  <div class="PageHome">
    <section-block class="PageHome_main">
      <header-content />
      <social-link />
    </section-block>

    <section-block>
      <heading>Profile</heading>
      <dl>
        <div>
          <dt>Skill</dt>
          <dd>HTML</dd>
          <dd>CSS</dd>
          <dd>JavaScript</dd>
          <dd>Vue.js</dd>
          <dd>Nuxt.js</dd>
          <dd>Node.js</dd>
          <dd>AMP</dd>
          <dd>PHP</dd>
        </div>
        <div>
          <dt>Like</dt>
          <dd>Movie</dd>
        </div>
      </dl>
    </section-block>
  </div>
</template>

<script>
import SectionBlock from '@/components/common/SectionBlock'
import Heading from '@/components/common/Heading'
import SocialLink from '@/components/common/SocialLink'
import HeaderContent from '@/components/parts/HeaderContent'

export default {
  name: 'PageHome',
  components: {
    SectionBlock,
    Heading,
    HeaderContent,
    SocialLink
  }
}
</script>

<style lang="scss" scoped>
.PageHome {
  &_main {
    color: $COLOR_WHITE;
    background: $COLOR_CHARCOAL;
    text-align: center;
  }
}
</style>
