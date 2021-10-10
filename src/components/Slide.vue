<template>
  <div class="slide__wrapper">
    <div :style="{ 'background-color': colors.tertiary }" class="slide__outer p-3">
        <div class="image__wrapper">
            <img :src="river.image" :alt="river.slug">
        </div>

        <div :style="{ 'color': colors.secondary }" class="meta py-2 flex flex-row justify-between flex-nowrap">
            <div>
                <h3 class="font-bold">{{ river.title }}</h3>
                <p>{{ river.length }}</p>
            </div>
            <div>
                <router-link 
                    :to="{ name: 'River', params: { slug: river.slug } }" 
                    :style="{ 'background-color': colors.primary, 'color': colors.tertiary }" 
                    class="discover_button"
                >
                    Discover    
                </router-link>
            </div>
        </div>
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
        props: ['river']
    }
</script>

<style lang="scss">
    @import '../style.scss';
    
    .slide__outer {
        border-radius: 10px;

        .image__wrapper {
            height: 300px;

            img {
                @include adapt_image;
            }
        }
    }

    .discover_button {
        padding: 5px 15px;
        border-radius: 10px;

    }
</style>