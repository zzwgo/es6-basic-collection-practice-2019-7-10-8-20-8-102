'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let collectionAKeys=collectionA.map(item=>item.key)
  return collectionAKeys.filter(item=>objectB.value.includes(item))
}
