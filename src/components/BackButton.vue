<template>
  <router-link :to="{ name: 'Rivers' }" class="btn" :style="{ 'background-color': colors.secondary, 'color': colors.tertiary }">Back</router-link>
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