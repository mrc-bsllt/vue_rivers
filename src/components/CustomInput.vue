<template>
  <div class="custom_input mb-6 relative">
    <label :for="cId" :class="cType === 'text' ? 'hidden' : ''">{{ cPlaceholder }}</label>
    <input 
        :type="cType" 
        :placeholder="cPlaceholder" 
        :id="cId" 
        :style="{ 'border': '1px solid ' + colors.borderColor }"
        v-model="inputData.value" 
        @change="getUserInput"
    >

    <RequiredMessage v-if="activeRequired && inputData.value == ''" />
  </div>
</template>

<script>
    import RequiredMessage from './RequiredMessage.vue';

    export default {
        name: "CustomInput",
        components: {
            RequiredMessage
        },
        props: {
            cType: {
                type: String,
                required: true
            },
            cPlaceholder: {
                type: String,
                required: false
            },
            cId: {
                type: String,
                required: true
            },
            activeRequired: {
                type: Boolean,
                required: false
            }
        },
        data() {
            return {
                inputData: {
                    value: '',
                    key: this.cId
                },
                colors: this.$store.state.colors
            }
        },
        methods: {
            getUserInput() {
                this.$emit('sendUserInput', this.inputData);
            }
        }
    }
</script>

<style lang="scss">
        .custom_input {
            width: 60%;

            input {
                width: 100%;
                padding: 5px;
                background-color: transparent;

                &:focus {
                    outline: none;
                }
            }
        }

        ::placeholder {
            color: #ebebeb;
        }
        .dark {
            ::placeholder {
                color: #141414;
            }
        }
</style>