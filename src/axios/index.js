import Jsonp from 'jsonp';

export default class Axios{
    static Jsonp(options){
        return new Promise((resolve,reject)=>{
            Jsonp(options.url,{
                param:'callback'
            },function(err,response){
               if(response){
                    resolve(response)
               }else{
                   reject(err);
               }
            })
       }) 
    }
}