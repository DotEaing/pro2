import Vue from 'vue'
import Vuex from 'vuex'
import work_modules from "./modules/work_modules"
import top_carousel from "./modules/top_carousel"
import sm_carousel from "./modules/sm_carousel"
import cennuo from "./modules/cennuo"
import card from "./modules/card"
import card2 from "./modules/card2"

Vue.use(Vuex)

const store=new Vuex.Store({
      modules: {
        work_modules,
        cennuo,
        sm_carousel,
        top_carousel,
        card,
        card2
      }
})

export default store