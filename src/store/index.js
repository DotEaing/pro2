import Vue from 'vue'
import Vuex from 'vuex'
import work_modules from "./modules/work_modules"

Vue.use(Vuex)

const store=new Vuex.Store({
      modules: {
      work_modules
      }
})

export default store