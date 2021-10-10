<template>
  <button 
    id="toggle_mode_button" 
    :style="{ 'background-color': colors.secondary }" 
    :class="buttonClass"
    @click="toggleMode"
>
  </button>
</template>

<script>
export default {
    name: "ToggleButton",
    data() {
        return {
            buttonClass: 'dark',
            colors: this.$store.state.colors
        }
    },
    methods: {
        // Switch theme mode
      toggleMode() {
        this.$store.commit('changeMode');

        var currentMode = this.$store.state.darkMode;
        this.buttonClass = currentMode ? 'dark' : 'active';
      }
    }
}
</script>

<style lang="scss" scoped>
    @import '../style.scss';
    $width: 60px;
    $height: calc(#{$width} / 2);
    $radius: calc(#{$height} / 2);

    #toggle_mode_button {
        @include position(absolute, $top: 3%, $right: 50%);
        @include dim($width, $height);
        transform: translateX(50%);
        border-radius: $radius;
        transition: $transition;

        @include media-desktop {
            right: 100px;
            transform: translateX(0);
        }

        &::before {
            content: '';
            @include position(absolute, $top: 0, $left: 0);
            width: $height;
            height: $height;
            border-radius: 50%;
            background-color: #9ad1d4;
            transition: $transition;
        }

        &.dark {

            &::before {
                background-color: #c78b0b;
            }
        }

        &.active {

            &::before {
                left: calc(100% - $height);
            }
        }
    }
</style>