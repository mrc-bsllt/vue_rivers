<template>
    <router-link 
        :to="{ name: 'Rivers' }" 
        id="init_button"
        :style="{ 'background-color': colors.primary }" 
        class="flex flex-row justify-center items-center flex-nowrap animate-bounce"
    >
        <span :style="{ 'color': colors.tertiary }" class="uppercase">Discover the rivers</span>
    </router-link>
</template>

<script>
    export default {
        name: "InitButton",
        data() {
            return {
                colors: this.$store.state.colors
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../style.scss';

    #init_button {
        @include dim(230px, 230px);
        @include boxShadow(#9ad1d4);
        border-radius: 50%;

        &.dark {
            @include boxShadow(#c78b0b);
        }

        @include media-desktop {
            @include dim(400px, 400px);
        }

        span {
            font-size: 20px;

            @include media-desktop {
                font-size: 30px;
            }
        }
    }
</style>