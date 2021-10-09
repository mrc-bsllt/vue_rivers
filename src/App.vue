<template>
  <div id="app" class="h-screen relative" :style="{ 'background-color': colors.primary }">
    <ToggleButton />
    <router-view :rivers="rivers" />
  </div>
</template>

<script>
  import ToggleButton from './components/ToggleButton.vue';

  export default {
    name: "App",
    components: {
      ToggleButton
    },
    data() {
      return {
        rivers: [],
        colors:  this.$store.state.colors
      }
    },
    methods: {
      getRivers() {
        this.axios
          .get(this.base_url)
          .then(
            (response) => {
              var data = response.data,
                mapReplace = {
                  'km': " ",
                  ',' :"."
                };

              var supportArray = [];

              data.forEach(
                (element) => {
                  var convertedLength = parseFloat(element.length.replace(/km|,/gi, function(matched) { return mapReplace[matched]; }));

                  element = {...element, lengthToNumber: convertedLength}
                  supportArray.push(element);
                }
              );

              this.rivers = supportArray.sort(function(a, b) { return a.lengthToNumber - b.lengthToNumber });
            }
          );
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
    @include flex();
    transition: $transition;
  }

</style>