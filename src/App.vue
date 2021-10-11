<template>
  <div id="app" class="h-screen relative flex flex-row justify-center items-center flex-nowrap" :style="{ 'background-color': colors.primary }">
    <ToggleButton />
    <BackButton v-if="$route.name === 'River'" />

    <router-view :rivers="rivers" @sendNewRiver="getNewRiver" />
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
              var data = response.data;

              if(localStorage.newRivers) {
                var addedRivers = JSON.parse(localStorage.newRivers);
                data = data.concat(addedRivers);
              }

              // Add the key for the length of type number
              var newData = data.map(
                (element) => {
                  let convertedLength = this.StringToNumber(element, 'length');

                  return element = {...element, lengthToNumber: convertedLength}
                }
              );

              this.rivers = this.SortRivers(newData, 'lengthToNumber');
            }
          );
      },

      // Convert length into number
      StringToNumber(el, key) {
        var mapReplace = { 'km': " ", ',' :"." };
        return parseFloat(el[key].replace(/km|,/gi, function(matched) { return mapReplace[matched]; }));
      },

      // Sort Rivers
      SortRivers(array, key) {
        return array.sort((a, b) =>  a[key] - b[key]);
      },

      // Get new River from 'Home' component
      getNewRiver(data) {
        let convertedLength = this.StringToNumber(data, 'length');
        data = {...data, lengthToNumber: convertedLength};

        this.rivers = this.SortRivers([...this.rivers, data], 'lengthToNumber');
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