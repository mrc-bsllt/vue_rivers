<template>
  <main class="flex flex-row justify-center items-center flex-nowrap">
      <InitButton />
  </main>
</template>

<script>
    import InitButton from './InitButton';

    export default {
        name: "Main",
        components: {
            InitButton,
        }
    }
</script>

<style lang="scss" scoped>
    @import '../style.scss';

    main {
        height: calc(100% - $headerHeight);
    }
</style>