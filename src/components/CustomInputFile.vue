<template>
  <label for="file-upload" :style="{ 'border-color': colors.borderColor }" class="custom_file_upload block relative">
      <input type="file" accept="image/*" id="file-upload" @change="getUrl" class="hidden">
      <i class="fas fa-camera-retro" :style="{ 'color': colors.borderColor }"></i>
      <img :src="url" alt="upload_image" v-if="url">
  </label>
</template>

<script>
    export default {
        name: "CustomInputFile",
        data() {
            return {
                colors: this.$store.state.colors,
                url: null
            }
        },
        methods: {
            getUrl(e) {
                // get url from input type file
                const file = e.target.files[0];
                this.url = URL.createObjectURL(file);

                // send data to parent
                this.$emit('sendUrl', this.url);
            }
        }
    }
</script>

<style lang="scss">
    @import '../style.scss';

    .custom_file_upload {
        @include dim(100px, 100px);
        margin: 10px 0 !important;
        cursor: pointer;
        border-width: 1px;
        border-style: solid;
        border-radius: 50%;
        overflow: hidden;

        i,
        img {
            @include position(absolute, $top: 50%, $left: 50%);
            transform: translate(-50%, -50%);
        }

        i {
            padding: 10px;
            background-color: rgba(#000, 0.5);
            border-radius: 50%;
            z-index: 99;
        }

        img {
            @include adapt_image;
        }
    }
</style>