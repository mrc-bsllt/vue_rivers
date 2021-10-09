<template>
  <div class="slide__wrapper">
    <div :style="{ 'background-color': colors.tertiary }" class="slide__outer p-3">
        <div class="image__wrapper">
            <img :src="img" :alt="slug" class="w-full h-full">
        </div>
    </div>

    <div :style="{ 'color': colors.tertiary }" class="meta">
        <p class="text-center py-2">{{ length }}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Slide",
        data() {
            return {
                colors: this.$store.state.colors
            }
        },
        props: ['text', 'img', 'title', 'slug', 'length']
    }
</script>

<style lang="scss">
    .slide__outer {
        border-radius: 10px;

        .image__wrapper {
            height: 300px;

            img {
                object-fit: cover;
                object-position: center;
            }
        }
    }
</style>