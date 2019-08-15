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
    min-width: $CONTENT_MIN_WIDTH;
    padding: 40px 20px;
    margin: 0 auto;
  }
}
</style>
