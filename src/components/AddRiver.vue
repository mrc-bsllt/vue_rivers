<template>
  <div id="add_river" class="flex flex-row justify-center items-center flex-nowrap" :class="this.$store.state.darkMode ? 'dark' : ''">

      <div :style="{ 'background-color': colors.primary }" class="input_group flex flex-col justify-center items-center flex-nowrap w-4/5 h-4/5">
        <CustomInputFile @sendUrl="getUrl" />
        <CustomInput cType="text" cPlaceholder="Name" cId="title" :activeRequired="activeRequired" @sendUserInput="setInputValue" />
        <CustomInput cType="text" cPlaceholder="Km" cId="length" :activeRequired="activeRequired" @sendUserInput="setInputValue" />

        <div id="countries" class="flex flex-row justify-center items-center flex-wrap">
            <div class="country flex flex-col justify-start items-center flex-wrap p-3" v-for="(country, index) in countries" :key="index">
                <label :for="'country_' + index">{{ country }}</label>
                <input type="checkbox" :id="'country_' + index" :value="country" v-model="countriesArray">
            </div>
        </div>

        <textarea placeholder="Description" class="mt-4" v-model="description" cols="30" rows="5" :style="{ 'border': '1px solid ' + colors.borderColor }"></textarea>

        <button class="btn btn-add-river" :style="{ 'background-color': colors.secondary, 'color': colors.borderColor }" @click="createObjRiver">Add</button>
      </div>

      <BackButton />
  </div>
</template>

<script>
    import CustomInputFile from './CustomInputFile.vue';
    import CustomInput from './CustomInput.vue';
    import BackButton from './BackButton.vue';

    export default {
        name: "AddRiver",
        components: {
            CustomInputFile,
            CustomInput,
            BackButton
        },
        data() {
            return {
                colors: this.$store.state.colors,
                countries: ['Africa', 'Asia', 'Europa', 'Nordamerica', 'Sudamerica', 'Oceania', 'Antartide'],
                countriesArray: [],
                description: '',
                river: {},
                activeRequired: false
            }
        },
        methods: {
            // Read/Set url-image from child
            getUrl(data) {
                this.river = { ...this.river, image: data };
            },

            // Set River data (exclude image)
            setInputValue(data) {
                this.river = { ...this.river, [data.key]: data.value };
            },

            // Create new Object (river)
            createObjRiver() {
                if(!this.river.image) {
                    this.river.image = require('../assets/placeholder-image.png');
                }
                
                if(this.river.title && this.river.length) {
                    this.river.slug = this.river.title.replace(/[^A-Z0-9]+/ig, "-").toLowerCase();
                    this.river.length = this.river.length + ' Km';
                    this.river.countries = this.countriesArray;
                    this.river.description = this.description;
    
                    this.UpdateLocalstorage(this.river);    
    
                    this.$emit('sendNewRiver', this.river);
                    this.activeRequired = false;
                    this.$router.push('Rivers');
                } else {
                   this.activeRequired = true;
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

<style lang="scss">
    @import '../style.scss';

    #add_river {
        height: calc(100% - #{$headerHeight});

        .input_group {
            padding: 20px;
            border-radius: 10px;

            textarea {
                width: 60%;
                padding: 5px;
                background-color: transparent;
                resize: none;

                &:focus {
                    outline: none;
                }
            }
        }
    }
</style>