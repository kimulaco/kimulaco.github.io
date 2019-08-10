<template>
  <section class="SectionBlock">
    <div class="SectionBlock_inner">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionBlock'
}
</script>

<style lang="scss" scoped>
.SectionBlock {
  &_inner {
    @include reset-child-margin();
    max-width: $CONTENT_MAX_WIDTH;
    padding: 32px 10px;
    margin: 0 auto;
  }
}
</style>
