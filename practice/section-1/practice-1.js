'use strict';

function collectSameElements(collectionA, collectionB) {
 var length1=collectionA.length;
var length2=collectionB.length;
var newArray=new Array();
var k=0;
for(var i=0;i<length1;i++)
for(var j=0;j<length2;j++)
if(collectionA[i]==collectionB[j]){
newArray[k]=collectionA[i];
k++;
}
  return newArray;
}
