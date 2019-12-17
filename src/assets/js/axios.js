import axios from "axios"

var form={
    login(url,obj,callback) {
        axios.get(url,{params:obj})
        .then(callback)  
    },

    find(url,obj,callback){
        axios.get(url,{params:obj})
        .then(callback)
    },
    
    register(url,pastData,callback){
        axios.get(url,{params:pastData}) //之后改为post
        .then(callback)
    },

    // 获取图片地址
    

    
}
export default form