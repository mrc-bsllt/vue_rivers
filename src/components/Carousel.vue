<template>
    <agile :options="carouselOptions">
        <Slide 
            v-for="(river, index) in rivers" 
            :key="index" 
            :img="river.image"
            :title="river.title"
            :slug="river.slug"
            :length="river.length"
            class="slide px-3" 
        />
    </agile>
</template>

<script>
    import { VueAgile } from 'vue-agile';
    import Slide from './Slide.vue';

    export default {
        name: "Carousel",
        components: {
            agile: VueAgile,
            Slide
        },
        props: {
            rivers: {
                rivers: {
                    type: Array,
                    required: true
                }
            }
        },
        data() {
            return {
                carouselOptions: {
                    centerMode: true,
                    slidesToShow: 1,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3
                            }
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="scss">

</style>