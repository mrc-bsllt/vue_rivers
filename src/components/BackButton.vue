<template>
  <router-link :to="{ name: 'Rivers' }" id="back_button" :style="{ 'background-color': colors.secondary, 'color': colors.tertiary }">Back</router-link>
</template>

<script>
    export default {
        name: "BackButton",
        data() {
            return {
                colors: this.$store.state.colors
            }
        }
    }
</script>

<style lang="scss">
    @import '../style.scss';
    
    #back_button {
        padding: 15px 30px;
        border-radius: 30px;
        @include position(absolute, $bottom: 2%, $left: 50%);
        transform: translateX(-50%);

    }
</style>