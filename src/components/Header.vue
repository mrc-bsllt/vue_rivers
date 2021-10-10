<template>
  <header :style="{ 'border-bottom-color': colors.borderColor }">
      <h1 :style="{ 'color': colors.tertiary }" class="text-center uppercase">Rivers</h1>
  </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                colors: this.$store.state.colors
            }
        }
    }
</script>

<style lang="scss">
    @import '../style.scss';

    header {
        height: $headerHeight;
        line-height: $headerHeight;
        border-bottom-width: 2px;
        border-bottom-style: solid;

        h1 {
            font-size: $h1Font;
        }
    }
</style>