<template>
  <div class="PageHome">
    <section-block class="PageHome_main">
      <header-content />
      <link-list :items="socialLink" />
    </section-block>

    <section-block>
      <heading>Profile</heading>

      <section>
        <heading level="3">Skill</heading>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>Nuxt.js</li>
          <li>Node.js</li>
          <li>AMP</li>
          <li>PHP</li>
        </ul>
      </section>
    </section-block>
  </div>
</template>

<script>
import DEFINE from '@/assets/js/define'
import SectionBlock from '@/components/common/SectionBlock'
import Heading from '@/components/common/Heading'
import LinkList from '@/components/common/LinkList'
import HeaderContent from '@/components/parts/HeaderContent'

export default {
  name: 'PageHome',
  components: {
    SectionBlock,
    Heading,
    HeaderContent,
    LinkList
  },
  data() {
    return {
      socialLink: [
        {
          text: 'Twitter',
          href: DEFINE.URL.TWITTER
        },
        {
          text: 'GitHub',
          href: DEFINE.URL.GITHUB
        }
      ]
    }
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
