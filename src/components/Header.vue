<template>
  <header :style="{ 'border-bottom-color': colors.borderColor }" class="flex felx-row justify-center items-center flex-nowrap">
      <router-link :to="{ name: 'Home' }">
        <h1 :style="{ 'color': colors.tertiary }" class="uppercase">Rivers</h1>
      </router-link>
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
        border-bottom-width: 2px;
        border-bottom-style: solid;

        h1 {
            font-size: $h1Font;
        }
    }
</style>