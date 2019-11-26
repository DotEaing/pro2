<template>
  <div>
      <div class="footer">
        <h3 class="ftlogo">
            <a href="/"><img src="@/assets/img/common/ftlogo.png" alt="logo"></a>
        </h3>
        <div class=" footer01 cl mid">
        <div class="foot lf">
           
            <ul class="default-pc-nav-footer  ftnav cl ">
                <li v-for="(name,index) of nav" :key="index" class="lf">
                    <router-link :to="name.link" >
                         <span 
                          :class="{'font-color':index == hoverIndex}" 
                            @mouseover="hoverIndex=index"
                            @mouseleave="hoverIndex=-1">
                            {{name.title}}</span>
                    </router-link>
                </li>
            </ul>
        
        <div class="two cl">
           
            <ul class="lx cl lf">
            <li class="wb">
                <a href="http://www.52-0185.demo.taiduyun.com" target="_blank" rel="nofollow">
                <img src="@/assets/img/common/wb01.png" alt="" srcset="">
                </a>
            </li>
            <li class="wx">
                <a href="javascript:void(0);">
                    <img src="@/assets/img/common/wx01.png" alt="" srcset="">
                </a>
                </li>
            <li class="qq">
                <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=&amp;menu=yes" target="_blank">
                    <img src="@/assets/img/common/qq01.png" alt="" srcset="">
                </a>
            </li>
            </ul>

            <div class="copy rf">
                <p class="default-pc-copyright">
                    <span><a href="sitemap.html" target="_blank">网站地图</a></span>
                    <span><a href="api.php?mod=createsitemap&amp;op=baidu&amp;sub=mobile" target="_blank">sitemapM</a></span>
                    <span><a href="api.php?mod=createsitemap&amp;op=baidu&amp;sub=pc" target="_blank">sitemapPC</a></span><br>
                    <span>Copyright © 2019 态度云(<a href="https://www.taiduyun.com" target="_blank">taiduyun.com</a>)版权所有</span>
                    <span>备案号：<a href="http://www.beian.miit.gov.cn/" rel="nofollow" target="_blank">闽ICP备11018372号-9</a></span><br>
                    <span class="support">技术支持：<a href="https://www.taiduyun.com" target="_blank">态度云</a></span>
                    <span>关键词：请在后台设置网站名称</span>
                    <span></span>
                </p>
            </div>

        </div><!---two--->

            <div class="addr">
            <ul>
                <li class="add"><h5>公司地址：</h5><p>北京市长安街1号楼1号大院1楼</p></li>
                <li class="tel"><h5>业务热线：</h5><p>400-888-8888　新人顾问：400-000-0000</p></li>
            <!--   <li class="email"><h5>合作邮箱：</h5><p></p></li>-->
            <!--   <li class="fax"><h5>传　　真：</h5><p></p></li--->
            </ul>
            
            </div>
            
        </div><!----foot--->
        
            <div class="gzh rf">
            <img src="@/assets/img/common/wx.png" width="314" height="180" alt="erweima">
            </div>
            
        </div><!----wp---->
        
        <dl class="default-pc-links-text cl mid links">
            <dt>友情链接<span>:</span></dt><dd><a href="/" target="_blank">友情链接</a></dd>
            <dd><a href="/" target="_blank">友情链接</a></dd>
        </dl>

        <div class="top">
            <img src="@/assets/img/common/top.png" alt="" srcset="">
        </div>
        </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
            hoverIndex:-1,
              nav:[
                {title:"首页",link:"#"},
                {title:"原创风格",link:"#"},
                {title:"最新活动",link:"#"},
                {title:"最新发布",link:"#"},
                {title:"最新客片",link:"#"},
                {title:"新闻资讯",link:"#"},
                {title:"品牌文化",link:"#"}
                ],        
        }
    }

}
</script>

<style>
.footer {
    background-color: #001a27;
    padding: 100px 0;
    
    
}
.ftlogo {
    text-align: center;
    padding-bottom: 80px;
}
.ftlogo img {
    max-width: 300px;
    height: auto;
}
.footer01 {
    border-top: solid 1px #2e3b41;
    border-bottom: solid 1px #2e3b41;
    padding-bottom: 20px;
}

.foot {
    width: 60%;
}

.ftnav {
    padding: 30px 0;
    border-bottom: solid 1px #2e3b41;
}


.ftnav li {
    float: left;
    margin-right: 20px;
}

.ftnav li a {
    color: #dfcca1;
    line-height: 30px;
}

.two {
    border-bottom: solid 1px #2e3b41;
   

}

.lx {
    padding: 20px 0;
}

.mid .lx li {
    margin-right: 9px;
}

.lx li {
    float: left;
    border-radius: 50%;
    border: 1px solid #dfcca1;
    margin-right: 17px;
    overflow: hidden;
}

.copy {
    width: 78%;
    margin: 20px 0;
}

.default-pc-copyright {
    width: 100%;
}

.default-pc-copyright {
   
    line-height: 2;
    color: #666;
    font-size: 12px;
}

.default-pc-copyright span {
    color: #ddd;
}

.default-pc-copyright span {
    display: inline-block;
    white-space: nowrap;
    margin-right: 10px;
}


.default-pc-copyright a {
    color: #dfcca1;
    font-size: 12px;
}

.addr {
    padding: 20px 0;
}

.addr li {
    float: left;
    margin-right: 20px;
    line-height: 30px;
}


.addr li h5, .addr li p {
    float: left;
    color: #dfcca1;
}

.gzh {
    width: 314px;
    height: 180px;
    margin-top: 25px;
}

.gzh img {
    width: 100%;
    height: auto;
}

.links {
    padding: 30px  0;
}


.links dt, .links dd a {
    font-size: 14px;
    color: #dfcca1;
    margin-right: 10px;
}
.default-pc-links-text dt, .default-pc-links-text dd {
    float: left;
}

dt {
    display: block;
}

dd {
    display: block;
    margin-inline-start: 40px;
}

.links dt, .links dd a {
    font-size: 14px;
    color: #dfcca1;
    margin-right: 10px;
}

.links dd a {
    color: #dfcca1;
}

.top {
    width: 214px;
    height: 109px;
    margin: 0 auto;
    cursor: pointer;
    }

.font-color{
    color: #fff;
}
</style>