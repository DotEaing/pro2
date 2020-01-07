import axios from "axios"

var form={
    // 登录注册get
    login_get(url,obj,callback) {
        axios.get(url,{params:obj})
        .then(callback)  
    },
     // 登录注册post
    login_post(url,pastData,callback){
        axios.post(url,{params:pastData}) //之后改为post
        .then(callback)
    },

    // 获取每组首张图片地址
    
    img(url,img_folder,callback){
        axios.get(url,{params:{img_folder}}) 
        .then(callback)
    },

    y_img(url,name,img_folder,callback){
        axios.get(url,{params:{img_folder,name}}) 
        .then(callback)
    },

    // 获取单组图片
    allImg(url,name,img_folder,callback){
        axios.get(url,{params:{img_folder,name}}) 
        .then(callback)
    },
    
}
export default form