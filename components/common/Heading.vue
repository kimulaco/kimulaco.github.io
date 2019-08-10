<template>
  <h2 class="Heading">
    <span class="Heading_inner">
      <slot />
    </span>
  </h2>
</template>

<script>
export default {
  name: 'Heading'
}
</script>

<style lang="scss" scoped>
.Heading {
  text-align: center;
  font-size: 28px;
  margin: 0 0 32px;
}
</style>
