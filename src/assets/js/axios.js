import axios from "axios"

var form={
    login(url,obj,callback) {
        axios.get(url,{params:obj})
        .then(callback)  
    },
    
    register(postData,url,callback){
        axios.get(url,{params:obj})
        .then(callback)
    }
    
}
export default form