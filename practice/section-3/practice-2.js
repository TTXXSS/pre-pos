'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var length1=collectionA.length;
  var temp=objectB.value;
  var length2=temp.length;
  for(var i=0;i<length1;i++)
  for(var j=0;j<length2;j++)
  if(collectionA[i].key===temp[j]){
    var n=Math.floor(collectionA[i].count/3);
    collectionA[i].count=collectionA[i].count-n;
  }
   return collectionA;
}
