import Vue from 'vue'
import Vuex from 'vuex'
import work_modules from "./modules/work_modules"
import top_carousel from "./modules/top_carousel"
import cennuo from "./modules/cennuo"
import card from "./modules/card"
import nav from "./modules/nav"
import login from "./modules/login"
import news from "./modules/news"
import activeity from "./modules/activeity"
import original from "./modules/original"


Vue.use(Vuex)

const store=new Vuex.Store({
      modules: {
        work_modules,
        cennuo,
        top_carousel,
        card,
        news,
        nav,
        login,
        activeity,
        original 
      }
})

export default store