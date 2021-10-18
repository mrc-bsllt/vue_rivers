<template>
  <div class="required_message">
      <small class="required_text">This Field is required</small>
  </div>
</template>

<script>
    export default {
        name: "RequiredMessage"
    }
</script>

<style lang="scss">
    @import '../style.scss';

    .required_message {
        @include position(absolute, $top: 100%, $left: 0);

        .required_text {
            color: red;
        }
    }
</style>