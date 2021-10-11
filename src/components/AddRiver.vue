<template>
  <div id="add_river" class="flex flex-row justify-center items-center flex-nowrap" :class="this.$store.state.darkMode ? 'dark' : ''">

      <h2 :style="this.$store.state.darkMode ? 'color: white' : 'color: black'">Style and Fields Control WIP</h2>

      <div :style="{ 'background-color': colors.primary }" class="input_group flex flex-col justify-center items-center flex-nowrap w-4/5 h-4/5">
        <CustomInputFile @sendUrl="getUrl" />
        <input type="text" placeholder="Name" id="title" v-model="title">
        <input type="text" placeholder="Km" id="length" v-model="length">
        <div id="countries" class="flex flex-row justify-center items-center flex-nowrap mb-3">
            <div class="country" v-for="(country, index) in countries" :key="index">
                <label :for="'country_' + index">{{ country }}</label>
                <input type="checkbox" :id="'country_' + index" :value="country" v-model="countriesArray">
            </div>
        </div>
        <textarea placeholder="Description" v-model="description" cols="30" rows="5"></textarea>

        <button @click="createObjRiver">Add</button>
      </div>

      <BackButton />
  </div>
</template>

<script>
    import CustomInputFile from './CustomInputFile.vue';
    import BackButton from './BackButton.vue';

    export default {
        name: "AddRiver",
        components: {
            CustomInputFile,
            BackButton
        },
        data() {
            return {
                colors: this.$store.state.colors,
                countries: ['Africa', 'Asia', 'Europa', 'Nordamerica', 'Sudamerica', 'Oceania', 'Antartide'],
                image: '',
                title: '',
                length: '',
                countriesArray: [],
                description: ''
            }
        },
        methods: {
            // Read/Set url-image from child
            getUrl(data) {
                this.image = data;
            },

            // Create new Object (river)
            createObjRiver() {
                if(this.image != '') {
                    var newRiver = {
                        image: this.image,
                        title: this.title,
                        slug: this.title.toLowerCase().replace(' ', '-'),
                        length: this.length + ' Km',
                        countries: this.countriesArray,
                        description: this.description
                    }
    
                    this.UpdateLocalstorage(newRiver);    
    
                    this.$emit('sendNewRiver', newRiver);
    
                    this.$router.push('Rivers');
                }
            },

            // Update Local Storage
            UpdateLocalstorage(el) {
                if(!localStorage.newRivers) {
                    localStorage.newRivers = JSON.stringify([el]);
                } else {
                    var currentStorage = JSON.parse(localStorage.newRivers),
                        newStorage = [...currentStorage, el];

                    localStorage.newRivers = JSON.stringify(newStorage);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../style.scss';

    #add_river {
        height: calc(100% - #{$headerHeight});

        .input_group {
            padding: 20px;
            border-radius: 10px;
        }

        ::placeholder {
            color: #9ad1d4;
        }

        &.dark {
            ::placeholder {
                color: #c78b0b;
            }
        }
    }
</style>