const axios=require('axios')
const cheerio=require('cheerio')

let collectedData=[];
const keys=['rank','name','price','24h','7d','marketcap','24hvolume','supply']
async function getPrice(){
    try{
        const targetUrl="https://coinmarketcap.com/";
        const data=await axios({method:'GET',url:targetUrl})
        
        const $=cheerio.load(data.data);
        const selector="  div > div > div > div > div > div > table > tbody > tr";
        let temp=null;
        $(selector).each((Idx,parentEl)=>{
            
            if(Idx<10){
            console.log("------------------------------")
            let bucket={}
            $(parentEl).children().each((Idx2,childEl)=>{
                
                 if(keys[Idx2-1]){
                  
                 bucket[keys[Idx2-1]]= $(childEl).text();
                }
                
               
            }
            
             
            );  
            
            collectedData[Idx]=bucket;
         }
        })
        return collectedData;
    } 
    catch(err){
        console.error(err)
    }
}

exports.func=getPrice;