<template>
  <div class="river" v-if="river != ''">
    <div class="w-4/5 h-full river__wrapper">
      <div :style="{ 'background-color': colors.tertiary }" class="image__wrapper">
        <img :src="river.image" :alt="river.slug">
      </div>

      <div :style="{ 'color': colors.tertiary }" class="river__meta">
        <h3 class="title my-3 font-bold">{{ river.title }}</h3>
        <div class="meta__wrapper">
          <p><strong>Extends for:</strong> {{ river.length }}</p>
          <p>
            <strong>{{ river.countries.length > 1 ? 'Countries' : 'Country' }}:</strong> {{ river.countries.join(', ') }}
          </p>
          <p class="description">{{ river.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "River",
        props: {
          rivers: {
            type: Array,
            required: true
          }
        },
        data() {
          return {
            river: '',
            colors: this.$store.state.colors
          }
        },
        mounted() {
          // Get the specific river
          var river = this.rivers.filter(
            (element) => {
              return element.slug === this.$route.params.slug;
            }
          );

          this.river = river[0];
        }
    }
</script>

<style lang="scss" scoped>
  @import '../style.scss';

  .river {
    height: calc(100% - #{$headerHeight});
    padding: 15px;

    .river__wrapper {
      margin: auto;

      .title {
        font-size: 20px;

        @include media-desktop {
          font-size: 40px;
        }
      }

      strong {
        font-size: 15px;
      }

      .description {
        margin-top: 15px;
      }
    }

    .image__wrapper {
      @include dim(100%, 50%);
      padding: 10px;
      border-radius: 10px;

      img {
        @include dim(100%, 100%);
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
      }
    }

    .river__meta {
      @include dim($height: 50%);

      .meta__wrapper {
        max-height: 70%;
        overflow: auto;
      }
    }
  }
</style>