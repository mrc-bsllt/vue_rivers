<template>
  <div id="home" :style="{ 'background-color': colors.secondary }">
      <Header />
      <Main v-if="$route.name !== 'Rivers'" />
      <Rivers v-else :rivers="rivers" />
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  import Main from '../components/Main.vue';
  import Rivers from '../components/Rivers.vue';

  export default {
    name: "Home",
    components: {
      Header,
      Main,
      Rivers
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
  };
</script>

<style lang="scss">
  @import '../style.scss';

  #home {
    @include dim(80%, 80%);
    transition: $transition;
    border-radius: 10px;
  }
</style>