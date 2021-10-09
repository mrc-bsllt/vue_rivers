<template>
  <div id="home" :style="{ 'background-color': colors.secondary }">
      <Header />
      <Main v-if="$route.name === 'Home'" />
      <Rivers v-else-if="$route.name === 'Rivers'" :rivers="rivers" />
      <River v-else :rivers="rivers" />
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  import Main from '../components/Main.vue';
  import Rivers from '../components/Rivers.vue';
  import River from '../components/River.vue';

  export default {
    name: "Home",
    components: {
      Header,
      Main,
      Rivers,
      River
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