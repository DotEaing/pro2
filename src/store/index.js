import Vue from 'vue'
import Vuex from 'vuex'
import work_modules from "./modules/work_modules"
import cennuo from "./modules/cennuo"

Vue.use(Vuex)

const store=new Vuex.Store({
      modules: {
      work_modules,
        cennuo
      }
})

export default store