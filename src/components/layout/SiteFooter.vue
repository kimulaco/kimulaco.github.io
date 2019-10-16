<template>
  <footer class="SiteFooter">
    <div class="SiteFooter_inner">
      <p class="SiteFooter_copyright">
        <small class="SiteFooter_copyright-text">
          &copy; 2019 kimulaco.
        </small>
      </p>
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

    min-width: $CONTENT_MIN_WIDTH;
    max-width: $CONTENT_MAX_WIDTH;
    padding: 20px 10px;
    margin: 0 auto;
  }
  &_copyright {
    &-text {
      font-size: 16px;
    }
  }
}
</style>
