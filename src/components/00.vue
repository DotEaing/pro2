<!--模板-->
<template>
  <div id="index">
    <div class="content">
      <!-- **轮播图区域 -->
      <div class="sec-idx-banner js-idx-banner" style="margin: 0 auto;position: relative">
        <div class="slider-inner">
          <ul class="slider-list">
            <li v-if="navIndex == index" v-for="(item,index) of navList" :key="index" :style="'background-image: url(' + item +  ') ;background-position:left top; background-size: 100% 900px; background-attachment:fixed'"></li>
          </ul>
          <div class="slider-nav">
            <div :class="navIndex == index ? 'nav nav_sel' : 'nav'" v-for="(item,index) of navList" :key="index" @click="navTab(index)"><img :src="item" height="105" width="170" />
              <!--<h2>澳门大桥夜景</h2>-->
            </div>
          </div>
        </div>
        <div style="position: absolute;bottom: -1px;left: 0;width: 100%">
          <img style="width: 100%" src="../../../static/images/icon/indexBgTitle.png" alt="">
        </div>
      </div>
      <!-- **标语-搜索-->
      <div class="sec-idx-banner-info">
        <div class="mid">
          <div class="lay-text fl">
            <h2><em>陪行</em>·<em>伴行</em>·<em>玩行</em></h2>
            <h3>玩乐之旅，总有陪伴在您身边</h3>
          </div>
          <div class="lay-search fl">
            <div class="search-inner clear">
              <form action="#" method="post" class="clear search_sou">
                <!--<input class="txt_search fl" v-model="searchTextData" @change="searchText" type="text" name="keyword" placeholder="请输���您心心向往的美丽城市..." />-->
                <div class="txt_search fl">
                  <el-autocomplete v-model="searchTextData" style="width: 100%;height: 100px" :clearable="true" :debounce="300" :fetch-suggestions="querySearchAsync" placeholder="请输入您心心向往的美丽城市... 如（丽江）" @select="handleSelect"></el-autocomplete>
                </div>
                <div class="btn_search fl" @click="cityBtn_text">前 往</div>
                <p class="search-textfull">据初略统计，每年旅行约55.39亿人次+ ，约1300+个美丽城市，等待您的陪伴相遇~ </p>
                <!-- <p class="search-textfull">美丽的城市，陪伴的旅行，等待您的相遇~ </p> -->
              </form>
            </div>
          </div>
          <!--暂不用-->
          <!--<div class="lay-cagetory fl">-->
          <!--<div class="js-idx-cagetory cat-img-thumb clearfix">-->
          <!--<a class="js-btn-prev prev-btn fl noShadow disabled" id="ctl-prev1" href="javascript:"></a>-->
          <!--<div class="cat-thumblist">-->
          <!--<ul class="js-thumb-ls thumb-ls fl pos-rel cat_hover">-->
          <!--<li><a href="#"><img src="../../../static/images/icon-idx-cat1.png" /></a></li>-->
          <!--<li><a href="#"><img src="../../../static/images/icon-idx-cat2.png" /></a></li>-->
          <!--<li><a href="#"><img src="../../../static/images/icon-idx-cat3.png" /></a></li>-->
          <!--<li><a href="#"><img src="../../../static/images/icon-idx-cat4.png" /></a></li>-->
          <!--<li><a href="#"><img src="../../../static/images/icon-idx-cat5.png" /></a></li>-->
          <!--<li><a href="#"><img src="../../../static/images/icon-idx-cat6.png" /></a></li>-->
          <!--<li><a href="#"><img src="../../../static/images/icon-idx-cat7.png" /></a></li>-->
          <!--</ul>-->
          <!--</div>-->
          <!--<a class="js-btn-next next-btn fl noShadow" id="ctl-next1" href="javascript:;"></a>-->
          <!--</div>-->
          <!--</div>-->
        </div>
      </div>
      <!-- 热门城市分类 -->
      <div class="seconedWidth classify">
        <h2>热门城市</h2>
        <div class="border_b">
          <span></span>
          <p></p>
        </div>
        <p>寻找心怡城市，拿起背包说走就走~</p>
      </div>
      <!-- **热门城市-->
      <div class="sec_idx_world similar  mid clearfix">
        <div class="mc">
          <div class="world-body mid--1000">
            <ul class="world_hover">
              <li class="bigimg" @click="cityBtn('北京',110000)">
                <a class="img">
                  <img src="../../../static/images/city/beijing.jpg" height="235" width="490" />
                  <div class="inner-info">
                    <div class="info">
                      <h2>北京</h2>
                      <span>Bei Jing</span>
                    </div>
                  </div>
                </a>
              </li>
              <li @click="cityBtn('丽江',530000)">
                <a class="img">
                  <img src="../../../static/images/city/lijiang.jpg" height="235" width="235" />
                  <div class="inner-info">
                    <div class="info">
                      <h2>丽江</h2>
                      <span>Li Jiang</span>
                    </div>
                  </div>
                </a>
              </li>
              <li @click="cityBtn('厦门',350000)">
                <a class="img">
                  <img src="../../../static/images/city/xiamen.jpg" height="235" width="235" />
                  <div class="inner-info">
                    <div class="info">
                      <h2>厦门</h2>
                      <span>Xia Men</span>
                    </div>
                  </div>
                </a>
              </li>
              <li @click="cityBtn('三亚',460000)">
                <a class="img">
                  <img src="../../../static/images/city/sanya.jpg" height="235" width="235" />
                  <div class="inner-info">
                    <div class="info">
                      <h2>三亚</h2>
                      <span>San Ya</span>
                    </div>
                  </div>
                </a>
              </li>
              <li @click="cityBtn('张家界',430000)">
                <a class="img">
                  <img src="../../../static/images/city/zhangjiajie.jpg" height="235" width="235" />
                  <div class="inner-info">
                    <div class="info">
                      <h2>张家界</h2>
                      <span>Zhang Jia Jie</span>
                    </div>
                  </div>
                </a>
              </li>
              <li @click="cityBtn('西安',610000)">
                <a class="img">
                  <img src="../../../static/images/city/xian.jpg" height="235" width="235" />
                  <div class="inner-info">
                    <div class="info">
                      <h2>西安</h2>
                      <span>Xi An</span>
                    </div>
                  </div>
                </a>
              </li>
              <li @click="cityBtn('桂林',450000)">
                <a class="img">
                  <img src="../../../static/images/city/guilin.jpg" height="235" width="235" />
                  <div class="inner-info">
                    <div class="info">
                      <h2>桂林</h2>
                      <span>Gui Lin</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <!--<div class="see-more"><a href="javascript:;">查看更多</a></div>-->
          </div>
        </div>
      </div>
      <!-- 分类 -->
      <div class="seconedWidth classify">
        <h2>代言旅行</h2>
        <div class="border_b">
          <span></span>
          <p></p>
        </div>
        <p>代言旅行,来一场说走就走的旅行吧~</p>
      </div>
      <!-- 代言旅行 -->
      <div class="jd_floor jd_floor2 similar clearfix">
        <div class="mid">
          <!--<div class="mt2"><img src="../../../static/images/spot-b2.png" /></div>-->
          <div class="mc2">
            <div class="jd_hot_body">
              <div class="lay-zone-cont2">
                <div class="jd-hotList-main mid--1000">
                  <ul>
                    <li v-for="(item,index) of TravelList.data" v-if="index <= 5" :key="index" @click="travelBtn(item)">
                      <em class="tag" v-if="item.thankMethod != 0"><i>{{item.thankMethod == 1 ? '代购' : item.thankMethod == 2 ? '抽奖' : item.thankMethod == 3 ? '代购+抽奖' : ''}}</i></em>
                      <a class="img"><img :src="item.travelImg" height="250" width="320"></a>
                      <div class="spot_desc">
                        <div class="addr clearfix"><label class="fl">[愿望]  {{item.title}}</label> <a class="fr">详情»</a></div>
                        <div class="nums">
                          <em class="e1">已获 {{item.travelMappingMoney}}元</em>
                          <em class="e2"></em>
                          <em class="e3">愿望 {{item.travelMoney}}元</em>
                        </div>
                      </div>
                      <div class="progress_bg">
                        <el-progress :text-inside="true" :stroke-width="18" :percentage="(item.travelMoney > item.travelMappingMoney) ?  Math.floor(item.travelMoney / item.travelMappingMoney) : 100  "></el-progress>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="see-more"  ><a href="javascript:;" @click="$router.push('/sponsorList')">查看更多</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 分类 -->
      <div class="seconedWidth classify">
        <h2>技能服务</h2>
        <div class="border_b">
          <span></span>
          <p></p>
        </div>
        <p>优质热情的小伴伴们，推荐技���上榜啦~</p>
      </div>
      <!-- 伴伴服务 -->
      <div class="seconedWidth card">
        <el-row>
          <el-col class="card_list mar10" :span="8" v-for="(item,index) in servesList.data" :key="index" v-if="index <= 7" :offset="index > 0 ? 4 : 0" @click="nameImg(item)">
            <template @click="nameImg(item)">
                <el-card :body-style="{ padding: '0px',}"  style="position: relative">
                  <img :src="item.serveCoverImg.split(',')[0]" class="card_image" @click="nameImg(item)">
                  <div class="name_img" @click="nameImg(item)">
                    <img :src="item.user.headImg" alt="">
                    <span>{{item.user.name}}</span>
                  </div>
                  <div style="padding: 20px 10px;box-sizing: border-box" @click="nameImg(item)">
                    <span class="name_title">{{item.title}}</span>
                    <div class=" clearfix">
                      <time class="time">[{{item.pushTypeStr}}]
                        <!--<span></span>四点九分-->
                      </time>
                      <time type="text" class="button">￥{{item.pushPrice}}元 / {{item.servePriceName}}</time>
                    </div>
                  </div>
                </el-card>
            </template>
          </el-col>
        </el-row>
        <div class="see-more" style="text-align: center"><a href="javascript:;"  @click="$router.push('/accompany')">查看更多</a></div>
      </div>

      <!-- 分类 -->
      <div class="seconedWidth classify" >
        <h2>偶遇捡人</h2>
        <div class="border_b">
          <span></span>
          <p></p>
        </div>
        <p>孤单旅行，不如一起结伴而行~</p>
      </div>

      <!-- **偶遇捡人-->
      <div class="sec_idx_world similar  mid clearfix">
        <div class="mc">
          <div class="world-body hotcity-body mid--1000">
            <ul>
              <li v-for="(item,index) of dynamicList.data" :key="index" @click="DynamicBtn(item)">
                <a class="img" >
                  <img :src="item.imgs[0] || item.userInfo.headImg" height="235" width="235" />
                  <div class="inner-info">
                    <div class="info">
                      <h2>{{item.startCity}} —— {{item.endCity}}</h2>
                    </div>
                  </div>
                  <div class="title">
                    <span>{{item.dynamicStart | GetTime}}出发 —— {{item.dynamicEnd| GetTime}}<span v-if="item.dynamicEnd">行程（{{(item.dynamicEnd - item.dynamicStart) /86400}}天）</span></span>
                  </div>
                </a>
              </li>
            </ul>
            <div class="see-more"><a href="javascript:;"  @click="$router.push('/encounter')">查看更多</a></div>
          </div>
        </div>
      </div>
      <div style="height:50px"></div>
    </div>
  </div>
</template>


<!--JS-->
<script>
  import {
    selectRegionByName,
    selectTravelList,
    selectServes,
    selectUserDynamicList
  } from 'api/apis'
  export default {
    data() {
      return {
        servesList: '',
        dynamicList: '',
        navList: [
          ['https://pbw-uploadfile.oss-cn-beijing.aliyuncs.com/home/pcImageBg/tab01.jpg'],
          ['https://pbw-uploadfile.oss-cn-beijing.aliyuncs.com/home/pcImageBg/tab02.jpg'],
          ['../../../static/images/tab/tab03.jpg'],
          ['../../../static/images/tab/tab04.jpg'],
          ['../../../static/images/tab/tab05.jpg'],
        ],
        navIndex: 0,
        TravelList: '',
        searchTextData: '',
        restaurants: [],
        state4: '',
        timeout: null,
        regionList: ''
      }
    },

    methods: {
      cityBtn_text() {
        if (this.searchTextData == '') {
          this.$message.error('请输入您想去往的城市名称...');
          return
        }
        if (this.searchTextData != '' && this.regionList.length <= 0) {
          this.$message.error('您输入的城市，当前未开放，请选择列表推荐城市...');
          return
        }
        this.$router.push('/city?cityText=' + this.regionList[0].value + '&cityCode=' + this.regionList[0].id)
      },

      
      querySearchAsync(queryString, cb) {
        let vm = this
        selectRegionByName({
          name: vm.searchTextData,
        }).then((res) => {
          if (res.code == '000000') {
            let dataList = []
            for (let item of res.data) {
              let list = {
                "value": item.areaname,
                "id": item.parentid
              }
              dataList.push(list)
            }
            vm.regionList = dataList
            cb(dataList);
          }
        })
      },


      handleSelect(item) {
        let vm = this
        vm.$router.push('/city?cityText=' + item.value + '&cityCode=' + item.id)
      },
      nameImg(item) {
        this.$router.push('/homePage?nameCode=' + item.userCode + '&nameService=' + item.code)
      },
      DynamicBtn(item) {
        this.$router.push('/encounter?nameCode=' + item.userCode + '&nameDynamic=' + item.code)
      },
      travelBtn(item) {
        this.$router.push('/homePage?nameCode=' + item.userCode + '&nameTravel=' + item.code)
      },
      // 热门城市
      cityBtn(text, code) {
        let vm = this
        vm.$router.push('/city?cityText= ' + text + '&cityCode=' + code)
      },
      
      // 轮播图切换
      navTab(index) {
        let vm = this
        vm.navIndex = index
      },

      // 判断浏览器
      IsPC() {
        //true为PC端，false为手机端
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
          "SymbianOS", "Windows Phone",
          "iPad", "iPod"
        ];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        return flag;
      }
    },

    mounted: function() {
      let vm = this
      // 判断浏览器 跳转h5
      if (!vm.$route.query.navigator) {
        if (vm.IsPC() == false) {
          vm.$router.push('/h5')
        }
      }
      // 首页banner 轮播图
      let navTime = setInterval(() => {
        if (vm.navIndex != 4) {
          vm.navIndex++
        } else {
          vm.navIndex = 0
        }
      }, 5000)

      // 获取代言旅行列表
      selectTravelList({
        nowPage: 1,
        nowPageDataNum: 9,
        map: {}
      }).then((res) => {
        if (res.code == '000000') {
          vm.TravelList = res.data
        } else {
          vm.$message.warning(res.msg)
        }
      })

      // 获取服务服务列表
      selectServes({
        nowPage: 1,
        nowPageDataNum: 12,
        map: {}
      }).then((res) => {
        if (res.code == '000000') {
          vm.servesList = res.data
        } else {
          vm.$message.warning(res.msg)
        }
      })

      // 获取偶遇列表
      selectUserDynamicList({
        nowPage: 1,
        nowPageDataNum: 12,
        map: {
          "dynamicType": "2"
        }
      }).then((res) => {
        if (res.code == '000000') {
          vm.dynamicList = res.data
        } else {
          vm.$message.warning(res.msg)
        }
      })
    },

    filters: {
      GetTime(value) {
        var time = new Date(value * 1000);
        function add0(m) {
          return m < 10 ? '0' + m : m
        }
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        var timeResult = add0(m) + '月' + add0(d) + '日';
        if (timeResult == '1970-01-01' || timeResult == '1970-01-02') {
          return '--'
        } else {
          return timeResult
        }
      }
    }
  }
</script>


<!--css样式-->
<style lang="scss" scoped>
  @import '../../../src/scss/commonH5.scss';
  .mar10{
    margin-top: 20px;
  }
  .progress_bg {
    padding: 10px;
  }
  .card_list {
    cursor: pointer;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
  }
  .card_list:hover {
    opacity: 0.8;
    filter: alpha(opacity=80);
    transform: scale(1.03);
    -webkit-transform: scale(1.03);
    -moz-transform: scale(1.03);
  }
  .card_list img {
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    border-radius: 5px;
  }
  .card_list:hover .card_image {
    filter: alpha(opacity=80);
    transform: scale(1.1);
    border-radius: 5px;
  }
  #index {
    width: 100%;
    height: 100%;
  }
  .name_img span {
    color: #fff;
    font-size: 14px;
    padding-left: 5px;
  }
  .name_img {
    position: absolute;
    top: 190px;
    left: 28px;
  }
  .name_img img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .classify {
    padding: 50px 0 0px 0;
  }
  /*玩行分类*/
  .classify h2 {
    color: #F45F3D;
    font-size: 26px;
    font-weight: 600;
    text-align: center;
  }
  .classify .border_b {
    margin: 10px 0;
  }
  .classify .border_b p {
    width: 250px;
    height: 1px;
    margin: auto;
    background-color: #E0DEDE;
  }
  .classify .border_b span {
    width: 25px;
    height: 2px;
    display: block;
    margin: auto;
    background-color: #2F2F2F;
  }
  .classify>p {
    color: #8D8A8A;
    text-align: center;
    font-size: 13px;
  }
  /** 探索世界 *!*/
  .sec_idx_world .world-body {
    margin-top: 50px;
  }
  .sec_idx_world .world-body ul {
    display: inline-block;
    margin-right: -20px;
  }
  .sec_idx_world .world-body ul li {
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    height: 235px;
    width: 235px;
    position: relative;
    cursor: pointer;
  }
  .sec_idx_world .world-body ul li.bigimg {
    width: 490px;
  }
  .sec_idx_world .world-body ul li img {
    display: block;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    border-radius: 10px;
  }
  .sec_idx_world .world-body ul li a:hover img {
    filter: alpha(opacity=80);
    transform: scale(1.1);
    border-radius: 10px;
  }
  .sec_idx_world .world-body ul li .inner-info {
    text-align: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .sec_idx_world .world-body ul li .inner-info .info {
    color: #fff;
    line-height: 23px;
    margin-top: 100px;
  }
  .sec_idx_world .world-body ul li .inner-info .info h2 {
    font-size: 20px;
    font-weight:bold;
  }
  .sec_idx_world .world-body ul li .inner-info .info span {
    font-size: 20px;
    font-family: Arial;
    letter-spacing: 2px;
  }
  .sec_idx_world .world-body ul li .title {
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    position: absolute;
    bottom: 0;
    border-radius: 0 0 10px 10px;
  }
  .sec_idx_world .world-body ul li .title span {
    display: table-cell;
    vertical-align: middle;
    color: #fff;
    font-size: 14px;
    padding: 0 5px;
    text-align: center;
    height: 42px;
    line-height: 20px;
    width: 225px;
  }
  /* ==== idx-banner首页轮播图 {{{ ==== */
  .sec-idx-banner .slider-inner {
    height: 800px;
    position: relative;
  }
  .sec-idx-banner .slider-list {
    width: 100%;
    height: 800px;
    overflow: hidden;
    position: relative;
  }
  .sec-idx-banner .slider-list li {
    background: none no-repeat center center;
    overflow: hidden;
    height: 800px;
  }
  /*banner nav*/
  .sec-idx-banner .slider-nav {
    display: inline-block;
    zoom: 1;
    cursor: pointer;
    position: absolute;
    top: 90px;
    right: 35px;
  }
  .nav_sel {
    border: 2px solid #f60!important;
  }
  .sec-idx-banner .slider-nav .nav {
    border: 2px solid rgba(0, 0, 0, 0.2);
    margin-top: 12px;
    overflow: hidden;
    padding: 1px;
    height: 105px;
    width: 170px;
    position: relative;
    z-index: 11;
    box-shadow: 0 0 2px rgba(50, 50, 50, 0.5);
    -webkit-box-shadow: 0 0 2px rgba(50, 50, 50, 0.5);
    -moz-box-shadow: 0 0 2px rgba(50, 50, 50, 0.5);
    border-radius: 8px;
  }
  .sec-idx-banner .slider-nav .nav h2 {
    background: url(../../../static/images/icon-banner-text-bg.png) repeat;
    color: #fff;
    font: 10px/24px "Microsoft Yahei";
    text-align: center;
    height: 24px;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .sec-idx-banner .slider-nav .nav.on {
    background: #f60;
  }
  .sec-idx-banner .slider-nav .nav.on h2 {
    background: url(../../../static/images/icon-banner-text-bg-on.png) repeat;
    cursor: default;
  }
  /* ==== 标语-搜索-分类 {{{ ==== */
  .sec-idx-banner-info {
    width: 100%;
    position: absolute;
    top: 310px;
  }
  .search-textfull {
    color: #fff;
    font-size: 14px;
    margin-top: 5px;
    display: inline-block;
  }
  .sec-idx-banner-info .lay-text {
    color: #fff;
    text-align: center;
    width: 100%;
    text-shadow: 2px 2px 5px rgba(50, 50, 50, 0.5);
  }
  .sec-idx-banner-info .lay-text h2 {
    text-shadow:5px 2px 6px #000;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: 15px;
  }
  .sec-idx-banner-info .lay-text h2 em {
    font-weight: 700;
    text-shadow:5px 2px 6px #000;
  }
  .sec-idx-banner-info .lay-text h3 {
    font-size: 25px;
    line-height: 36px;
    margin-top: 25px;
    letter-spacing: 8px;
    text-shadow:5px 2px 6px #000;
  }
  /*搜索*/
  .sec-idx-banner-info .lay-search {
    margin-top: 35px;
    width: 100%;
  }
  .sec-idx-banner-info .lay-search .search-inner {
    margin: 0 auto;
    width: 756px;
    background: rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 8px;
  }
  .sec-idx-banner-info .lay-search .txt_search {
    background: #fff;
    /*border: 1px solid #fff;*/
    border-radius: 5px;
    font: 18px "宋体";
    outline: none;
    /*padding: 16px 15px 26px;*/
    height: 30px;
    width: 602px;
  }
  .sec-idx-banner-info .lay-search .btn_search {
    background: #f60;
    border: 0 none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    font-family: "Microsoft Yahei";
    margin-left: 12px;
    text-align: center;
    height: 63px;
    line-height: 63px;
    width: 140px;
  }
  .btn_search {
    transition: all 0.3s linear;
  }
  /*分类*/
  .sec-idx-banner-info .lay-cagetory {
    margin-top: 60px;
    width: 100%;
  }
  .cat_hover li img:hover {
    transform: rotate(360deg);
  }
  .lay-cagetory .cat-img-thumb {
    width: 970px;
    overflow: hidden;
    margin: 0 auto;
  }
  #ctl-prev:hover,
  #ctl-next:hover {
    transform: scale(1.2);
  }
  .lay-cagetory .cat-img-thumb .prev-btn,
  .lay-cagetory .cat-img-thumb .next-btn {
    background: url(../../../static/images/icon-btn-prev-next.png) no-repeat 0 center;
    margin-top: 8px;
    height: 89px;
    width: 36px;
    transition: all 0.3s linear;
  }
  .lay-cagetory .cat-img-thumb .next-btn {
    background-position: -36px center;
  }
  .lay-cagetory .cat-img-thumb #ctl-prev.disabled,
  .lay-cagetory .cat-img-thumb #ctl-next.disabled {
    cursor: not-allowed;
  }
  .lay-cagetory .cat-img-thumb .cat-thumblist {
    float: left;
    margin: 0 20px;
    overflow: hidden;
    white-space: nowrap;
    width: 858px;
    position: relative;
  }
  .lay-cagetory .cat-img-thumb .thumb-ls li {
    display: inline;
    float: left;
    width: 143px;
  }
  .lay-cagetory .cat-img-thumb .thumb-ls li a {
    display: inline-block;
    margin: 0 20px;
  }
  .lay-cagetory .cat-img-thumb .thumb-ls li img {
    display: block;
    height: 103px;
    width: 103px;
    transition: transform 1s linear, all 1s;
    padding: 3px;
  }
  /* ==== [首页] 陪行向导-探索世界-热门城市-玩行向导-伴行向导-热门游记 {{{ ==== */
  .similar .mt {
    text-align: center;
    overflow: hidden;
    height: 78px;
  }
  .similar .mc {
    overflow: hidden;
  }
  .similar .mt2 {
    text-align: center;
    overflow: hidden;
    height: 70px;
  }
  .similar .mc2 {
    background: #fff;
    overflow: hidden;
  }
  .similar .see-more {
    text-align: center;
    margin-bottom: 30px;
  }
  .see-more a {
    background: url(../../../static/images/icon-arrow-down.png) no-repeat 50px center;
    border: 1px solid #cecdcd;
    color: #cecdcd;
    display: inline-block;
    font-size: 18px;
    padding: 5px 50px 5px 68px;
    border-radius: 25px;
  }
  .see-more a:hover {
    background-color: #C6C6C6;
    color: #fff;
  }
  /*查看更多*/
  .view-more {
    background: #fae6d9;
    border-radius: 3px;
    margin-top: 15px;
    padding: 4px 0;
    text-align: right;
    width: 100%;
    box-shadow: 0 -1px 3px rgba(50, 50, 50, 0.15) inset;
    -webkit-box-shadow: 0 -1px 3px rgba(50, 50, 50, 0.15) inset;
    -moz-box-shadow: 0 -1px 3px rgba(50, 50, 50, 0.15);
  }
  .view-more a {
    color: #f60;
    font: 16px/29px "Microsoft Yahei";
    margin-right: 14px;
    height: 30px;
  }
  .view-more a:hover {
    text-decoration: underline;
  }
  /* 陪行向导 */
  .lay-zone-menu {
    margin-top: 30px;
    text-align: center;
  }
  .lay-zone-menu ul {
    border-bottom: 2px solid #999;
    display: inline-block;
    *display: inline;
    *zoom: 1;
  }
  .lay-zone-menu ul li {
    float: left;
    margin-left: 80px;
    width: 215px;
  }
  .lay-zone-menu ul li.first {
    margin-left: 0;
  }
  .lay-zone-menu ul li.on {
    border-bottom: 3px solid #f60;
    margin-bottom: -2px;
  }
  .lay-zone-menu ul li.on a {
    color: #f60;
  }
  .lay-zone-menu ul li a {
    color: #333;
    cursor: pointer;
    display: block;
    font-size: 25px;
    padding-bottom: 15px;
    transition: color 0.3s;
    -webkit-transition: color 0.3s;
    -moz-transition: color 0.3s;
  }
  .lay-zone-menu ul li a:hover {
    color: #f60;
  }
  /*卡片*/
  /*内层居中样式*/
  .seconedWidth {
    width: 1000px;
    margin: 0 auto;
  }
  .time {
    font-size: 13px;
    color: #9B9B9B;
  }
  .time>span {
    width: 2px;
    height: 14px;
    background-color: #9B9B9B;
    display: inline-block;
    margin: 0 3px;
    vertical-align: -2px;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
    color: #F45F3D;
    font-weight: 600;
  }
  .card_image {
    width: 100%;
    display: block;
    height: 230px;
  }
  .el-card {
    font-size: 15px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .card {
    margin: 60px auto 80px;
  }
  .card .el-row:first-child {
    margin-bottom: 20px;
  }
  .el-col-8 {
    width: 25%;
    padding: 10px;
  }
  .el-col-offset-4 {
    margin-left: 0px!important;
  }
  /* ==== 旅游景点页面 {{{ ==== */
  /*当季景点推荐*/
  .jd_floor2,
  .jd_floor4,
  .jd_floor6 {
    background: #fff;
  }
  .jd_floor {
    padding: 0 0 10px 0;
  }
  .jd_floor .mc2 {
    background: none!important;
  }
  .jd_floor .lay-zone-cont2 {
    margin-top: 30px;
  }
  .jd-list-main .sel-month {
    text-align: center;
    width: 100%;
  }
  .jd-list-main .sel-month a {
    color: #999;
    cursor: pointer;
    font-size: 16px;
    margin: 0 15px;
  }
  .jd-list-main .sel-month a:hover {
    border-bottom: 2px solid #f60;
    color: #f60;
  }
  .jd-list-main .sel-month a.on {
    border-bottom: 2px solid #f60;
    color: #f60;
    font-weight: 700;
  }
  .jd-list-main ul {
    display: inline-block;
    margin-right: -20px;
  }
  .jd-list-main ul li {
    float: left;
    margin-right: 20px;
    margin-top: 20px;
    overflow: hidden;
    height: 235px;
    width: 235px;
    position: relative;
  }
  .jd-list-main ul li img {
    display: block;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
  }
  .jd-list-main ul li a:hover img {
    opacity: 0.8;
    filter: alpha(opacity=80);
    transform: translateY(1.03);
    -webkit-transform: scale(1.03);
    -moz-transform: scale(1.03);
  }
  .jd-list-main ul li .inner-info {
    text-align: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .jd-list-main ul li .inner-info .info {
    color: #fff;
    line-height: 23px;
    margin-top: 100px;
  }
  .jd-list-main ul li .inner-info .info h2 {
    font-size: 20px;
  }
  .jd-list-main ul li .inner-info .info span {
    font-size: 20px;
    font-family: Arial;
    letter-spacing: 2px;
  }
  .jd-list-main ul li .title {
    background: url(../../../static/images/icon-tit-bg.png) repeat;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .jd-list-main ul li .title span {
    display: table-cell;
    vertical-align: middle;
    color: #fff;
    font-size: 14px;
    padding: 0 5px;
    text-align: center;
    height: 42px;
    line-height: 20px;
    width: 225px;
  }
  /*热门景点推荐*/
  .jd-hotList-main ul {
    display: inline-block;
    margin-right: -20px;
  }
  .jd-hotList-main ul li {
    cursor: pointer;
    background: #fff;
    float: left;
    overflow: hidden;
    margin-right: 20px;
    margin-bottom: 30px;
    width: 320px;
    position: relative;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
  }
  .jd-hotList-main ul li:hover {
    opacity: 0.8;
    filter: alpha(opacity=80);
    transform: scale(1.03);
    -webkit-transform: scale(1.03);
    -moz-transform: scale(1.03);
    box-shadow: 2px 3px 5px #666;
  }
  .jd-hotList-main ul li .tag {
    background: url(../../../static/images/icon-label.png) no-repeat;
    color: #fff;
    font-size: 18px;
    padding-left: 8px;
    height: 32px;
    z-index: 10;
    position: absolute;
    top: 20px;
    right: 0;
  }
  .jd-hotList-main ul li .tag i {
    background: #f60;
    display: inline-block;
    padding: 0 10px;
    height: 32px;
    line-height: 32px;
  }
  .jd-hotList-main ul li a.img {
    display: block;
    overflow: hidden;
    height: 250px;
    width: 320px;
  }
  .jd-hotList-main ul li a.img img {
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
  }
  .jd-hotList-main ul li a.img:hover img {
    opacity: 0.8;
    filter: alpha(opacity=80);
    transform: scale(1.03);
    -webkit-transform: scale(1.03);
    -moz-transform: scale(1.03);
  }
  .jd-hotList-main ul li .spot_desc {
    padding: 5px 15px;
  }
  .jd-hotList-main ul li .spot_desc .addr {
    margin-top: 3px;
  }
  .jd-hotList-main ul li .spot_desc .addr label {
    color: #5d5d5d;
    font-size: 14px;
    width: 88%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .jd-hotList-main ul li .spot_desc .addr a {
    color: #f60;
    font-size: 12px;
    margin-top: 1px;
  }
  .jd-hotList-main ul li .spot_desc .addr a:hover {
    text-decoration: underline;
  }
  .jd-hotList-main ul li .spot_desc .nums {
    margin-top: 10px;
    margin-right: -1px;
    overflow: hidden;
    display: flex;
    justify-content: space-between
  }
  .jd-hotList-main ul li .spot_desc .nums em {
    border-right: 1px solid #e8e8e8;
    color: #aaa;
    display: inline;
    float: left;
    font-size: 13px;
    width: 32%;
  }
  .jd-hotList-main ul li .spot_desc .nums .e1 {
    text-align: left;
  }
  .jd-hotList-main ul li .spot_desc .nums .e2 {
    text-align: center;
  }
  .jd-hotList-main ul li .spot_desc .nums .e3 {
    border-right: 0;
    text-align: right;
  }
  .name_title {
    width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
  }
</style>

<style lang="scss">
  #index {
    .el-input__inner {
      font-size: 21px!important;
      height: 65px!important;
      line-height: 65px!important;
    }
  }
</style>



// WEBPACK FOOTER //
// src/views/index/index.vue