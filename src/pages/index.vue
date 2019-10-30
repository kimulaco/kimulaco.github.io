<template>
  <div class="PageHome">
    <section-block class="PageHome_main">
      <header-content />
      <button-list class="-type-02" :items="socialLink" />
    </section-block>

    <section-block>
      <heading>Profile</heading>

      <detail-list :items="profileList" />

      <heading level="3">Skill</heading>
      <list :items="skillList" />

      <heading level="3">Like</heading>
      <list :items="likeList" />
    </section-block>

    <section-block>
      <heading>Product</heading>
      <product-list :items="productList" />
      <p>
        See
        <inline-link :href="moreProductUrl">Github</inline-link>
        for more!
      </p>
    </section-block>

    <section-block>
      <heading>Contact</heading>
      <p>Please contact me via Twitter direct message!</p>
      <button-list :items="contactLink" />
    </section-block>

    <section-block>
      <heading>Link</heading>
      <link-list :items="linkList" />
    </section-block>
  </div>
</template>

<script>
import { URL, PROFILE, SKILL, LIKE, PRODUCT } from '@/assets/js/define'
import SectionBlock from '@/components/common/SectionBlock'
import InlineLink from '@/components/common/InlineLink'
import Heading from '@/components/common/Heading'
import List from '@/components/common/List'
import DetailList from '@/components/common/DetailList'
import ProductList from '@/components/common/ProductList'
import LinkList from '@/components/common/LinkList'
import ButtonList from '@/components/common/ButtonList'
import HeaderContent from '@/components/parts/HeaderContent'

export default {
  name: 'PageHome',
  components: {
    SectionBlock,
    InlineLink,
    Heading,
    List,
    DetailList,
    ProductList,
    LinkList,
    ButtonList,
    HeaderContent
  },
  data() {
    return {
      socialLink: [URL.twitter, URL.github, URL.qiita],
      profileList: PROFILE,
      skillList: SKILL,
      likeList: LIKE,
      productList: PRODUCT,
      moreProductUrl: URL.github.url,
      contactLink: [URL.twitter],
      linkList: URL
    }
  },
  mounted() {
    if (this.$route.query.hasOwnProperty('standalone')) {
      this.$ga.event({
        eventCategory: 'PWA',
        eventAction: 'launch'
      })
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
