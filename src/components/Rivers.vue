<template>
  <div id="rivers">
    <Carousel :rivers="rivers" />

    <router-link :to="{ name: 'AddRiver' }" :style="{ 'background-color': colors.secondary, 'color': colors.tertiary }" class="btn">Add River</router-link>
  </div>
</template>

<script>
  import Carousel from './Carousel.vue';

  export default {
      name: "Rivers",
      components: {
        Carousel
      },
      props: {
        rivers: {
          type: Array,
          required: true
        }
      },
      data() {
        return {
          colors: this.$store.state.colors
        }
      }
  }
</script>

<style lang="scss">
  @import '../style.scss';

  #rivers {
    height: calc(100% - #{$headerHeight});
  }

  .agile,
  .agile__list,
  .agile__track {
    @include dim($height: 100%);
  }

  .agile__actions {
    @include position(absolute, $top: 50%);
    transform: translateY(-50%);
    @include dim($width: 100%);
    padding: 0 20px;

    [type=button] {

      &.agile__nav-button {
        @include dim(50px, 50px);
        border-radius: 50%;
        background-color: rgba(#000000, 0.5);
        color: #ffffff;
      }
    }
  }
</style>