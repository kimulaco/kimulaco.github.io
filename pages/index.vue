<template>
  <div class="PageHome">
    <section-block class="PageHome_main">
      <header-content />
      <button-list class="-type-02" :items="socialLink" />
    </section-block>

    <section-block>
      <heading>Profile</heading>

      <heading level="3">Skill</heading>
      <profile-list :items="skillList" />

      <heading level="3">Like</heading>
      <profile-list :items="likeList" />
    </section-block>

    <section-block>
      <heading>Contact</heading>
      <p>Please contact me via Twitter direct message.</p>
      <button-list :items="contactLink" />
    </section-block>

    <section-block>
      <heading>Link</heading>
      <link-list :items="linkList" />
    </section-block>
  </div>
</template>

<script>
import { URL, SKILL, LIKE } from '@/assets/js/define'
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
      socialLink: [URL.twitter, URL.github],
      contactLink: [URL.twitter],
      linkList: URL,
      skillList: SKILL,
      likeList: LIKE
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
