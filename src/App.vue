<template>
  <div id="app" class="h-screen relative flex flex-row justify-center items-center flex-nowrap" :style="{ 'background-color': colors.primary }">
    <ToggleButton />
    <BackButton v-if="$route.name === 'River'" />

    <router-view :rivers="rivers" />
  </div>
</template>

<script>

  import ToggleButton from './components/ToggleButton.vue';
  import BackButton from './components/BackButton.vue';

  export default {
    name: "App",
    components: {
      ToggleButton,
      BackButton
    },

    data() {
      return {
        rivers: [],
        colors:  this.$store.state.colors
      }
    },

    methods: {
      // Set rivers
      getRivers() {
        this.axios
          .get(this.base_url)
          .then(
            (response) => {
              var data = response.data,
              mapReplace = { 'km': " ", ',' :"." };

              // Add the key for the length of type number
              var newData = data.map(
                (element) => {
                  var convertedLength = parseFloat(element.length.replace(/km|,/gi, function(matched) { return mapReplace[matched]; }));

                  return element = {...element, lengthToNumber: convertedLength}
                }
              );

              this.rivers = this.SortRivers(newData, 'lengthToNumber');
            }
          );
      },
      // Sort Rivers
      SortRivers(array, key) {
        return array.sort((a, b) =>  a[key] - b[key]);
      }
    },
    mounted() {
      this.getRivers();
    }
  }

</script>

<style lang="scss">
  @import './style.scss';

  #app {
    transition: $transition;
  }

</style>