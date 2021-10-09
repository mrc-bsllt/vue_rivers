<template>
    <agile :options="carouselOptions">
        <Slide 
            v-for="(river, index) in rivers" 
            :key="index" 
            :river="river"
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