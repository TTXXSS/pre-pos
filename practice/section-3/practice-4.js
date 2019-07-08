'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = [
    
  ];
  var temp=objectB.value;
  for (var i = 0; i < collectionA.length;) {
    var count = 0;
    for (var j = i; j < collectionA.length; j++) {
      if(collectionA[i]==='d-5'){
        collectionA[i]='d';
        count+=5;
        break;
      }else if (collectionA[i] === collectionA[j]) {
            count++;
        }
    }
   result.push({
        key: collectionA[i],
        count: count
    })
    i+=count;
}
for(var k=0;k<result.length;k++)
for(var l=0;l<temp.length;l++)
if(result[k].key===temp[l]){
  var n=Math.floor( result[k].count/3);
  result[k].count-=n;
}
return result;
}
