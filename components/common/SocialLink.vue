<template>
  <ul class="SocialLink">
    <li class="SocialLink_item">
      <a
        class="SocialLink_anchor"
        href="https://twitter.com/kimulaco"
        target="_blank"
      >
        Twitter
      </a>
    </li>
    <li class="SocialLink_item">
      <a
        class="SocialLink_anchor"
        href="https://github.com/kimulaco"
        target="_blank"
      >
        GitHub
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocialLink'
}
</script>

<style lang="scss" scoped>
$margin-size: 16px;

.SocialLink {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: -#{$margin-size} 0 0 -#{$margin-size};
  list-style: none;
  &_item {
    margin: $margin-size 0 0 $margin-size;
  }
  a {
    display: block;
    color: $COLOR_WHITE;
    min-width: 100px;
    padding: 8px;
    border: 2px solid $COLOR_WHITE;
    border-radius: 2px;
    text-decoration: none;
  }
}
</style>
