<template>
  <div id="add_river" class="flex flex-row justify-center items-center flex-nowrap">
      <div :style="{ 'background-color': colors.primary }" class="input_group flex flex-row justify-center items-center flex-nowrap w-4/5 h-4/5">
        <CustomInputFile @sendUrl="getUrl" />

      </div>
  </div>
</template>

<script>
    import CustomInputFile from './CustomInputFile.vue';

    export default {
        name: "Vue",
        components: {
            CustomInputFile
        },
        data() {
            return {
                colors: this.$store.state.colors,
                image: ''
            }
        },
        methods: {
            // Read/Set url-image from child
            getUrl(data) {
                this.image = data;
            }
        }
    }
</script>

<style lang="scss">
    @import '../style.scss';

    #add_river {
        height: calc(100% - #{$headerHeight});

        .input_group {
            padding: 20px;
            border-radius: 10px;
        }
    }
</style>