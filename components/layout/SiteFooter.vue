<template>
  <footer class="SiteFooter">
    <div class="SiteFooter_inner">
      <p class="SiteFooter_copyright"><small>&copy; 2019 kimulaco.</small></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style lang="scss" scoped>
.SiteFooter {
  color: $COLOR_WHITE;
  background: $COLOR_CHARCOAL;
  text-align: center;
  &_inner {
    @include reset-child-margin();
    max-width: $CONTENT_MAX_WIDTH;
    padding: 40px 10px;
    margin: 0 auto;
  }
  &_copyright {
    font-size: 16px;
  }
}
</style>
