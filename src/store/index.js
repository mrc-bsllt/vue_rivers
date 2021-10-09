import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      darkMode: true,
      colors: {
          primary: '#303030',
          secondary: '#141414',
          tertiary: '#ebebeb',
          borderColor: '#c78b0b'
      }
    },
    mutations: {
      changeMode (state) {
        state.darkMode = !state.darkMode;

        state.colors.primary = state.darkMode ? '#303030' : '#bebebe';
        state.colors.secondary = state.darkMode ? '#141414' : '#ebebeb';
        state.colors.tertiary = state.darkMode ? '#ebebeb' : '#303030';
        state.colors.borderColor = state.darkMode ? '#c78b0b' : '#9ad1d4';
      }
    }
});

export default store;