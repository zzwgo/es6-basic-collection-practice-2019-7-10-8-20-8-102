'use strict';

module.exports = function countSameElements(collection) {
  let itemCountMap=new Map()
  collection.forEach(item=>{
      let count =1
      if(item.indexOf("-")!=-1){
        let itemTemp=item
        item=item.substring(0,item.indexOf("-"));
        count = parseInt(itemTemp.substring(itemTemp.indexOf("-")+1,itemTemp.length));
      }
      if(itemCountMap.has(item)){
          count=itemCountMap.get(item)+1
      }
      itemCountMap.set(item,count)
  })
  return Array.from(itemCountMap).map((item)=>{
      return {
          key:item[0],
          count:item[1]
      }
  })
}
