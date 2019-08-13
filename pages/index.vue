<template>
  <div class="PageHome">
    <section-block class="PageHome_main">
      <header-content />
      <button-list :items="socialLink" />
    </section-block>

    <section-block>
      <heading>Profile</heading>

      <heading level="3">Skill</heading>
      <profile-list
        :items="[
          'HTML',
          'CSS',
          'Sass',
          'JavaScript',
          'TypeScript',
          'Vue.js',
          'Nuxt.js',
          'Node.js',
          'jQuery',
          'AMP',
          'PHP'
        ]"
      />

      <heading level="3">Like</heading>
      <profile-list :items="['Movie', 'Game']" />
    </section-block>

    <section-block>
      <heading>Link</heading>
      <link-list :items="linkList" />
    </section-block>
  </div>
</template>

<script>
import DEFINE from '@/assets/js/define'
import SectionBlock from '@/components/common/SectionBlock'
import Heading from '@/components/common/Heading'
import ProfileList from '@/components/common/ProfileList'
import LinkList from '@/components/common/LinkList'
import ButtonList from '@/components/common/ButtonList'
import HeaderContent from '@/components/parts/HeaderContent'

export default {
  name: 'PageHome',
  components: {
    SectionBlock,
    Heading,
    ProfileList,
    LinkList,
    ButtonList,
    HeaderContent
  },
  data() {
    return {
      socialLink: [DEFINE.URL.twitter, DEFINE.URL.github],
      linkList: DEFINE.URL
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
