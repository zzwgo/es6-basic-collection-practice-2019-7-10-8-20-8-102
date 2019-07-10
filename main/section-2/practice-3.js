'use strict';

module.exports = function countSameElements(collection) {
  let itemCountMap=new Map()
  collection.forEach(item=>{
      let count =1
      if(item.indexOf("-")!=-1){
        let itemTemp=item
        item=item.substring(0,item.indexOf("-"));
        count = itemCountMap.has(item)?parseInt(itemTemp.substring(itemTemp.indexOf("-")+1,itemTemp.length))+itemCountMap.get(item):parseInt(itemTemp.substring(itemTemp.indexOf("-")+1,itemTemp.length));
      }else  if(item.indexOf("[")!=-1){
        let itemTemp=item
        item=item.substring(0,item.indexOf("["));
        count = itemCountMap.has(item)?parseInt(itemTemp.substring(itemTemp.indexOf("[")+1,itemTemp.indexOf("]")))+itemCountMap.get(item):parseInt(itemTemp.substring(itemTemp.indexOf("[")+1,itemTemp.indexOf("]")));
       
      }else if(item.indexOf(":")!=-1){
        let itemTemp=item
        item=item.substring(0,item.indexOf(":"));
        count = itemCountMap.has(item)?parseInt(itemTemp.substring(itemTemp.indexOf(":")+1,itemTemp.length))+itemCountMap.get(item):parseInt(itemTemp.substring(itemTemp.indexOf(":")+1,itemTemp.length));
      } else if(itemCountMap.has(item)){
          count=itemCountMap.get(item)+1
      }
      itemCountMap.set(item,count)
  })

  return Array.from(itemCountMap).map((item)=>{
    return {
      name:item[0],
      summary:item[1]
    }
})
}
