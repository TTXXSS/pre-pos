'use strict';

        function collectSameElements(collectionA, collectionB) {
 var length1=collectionA.length;
var newArray=new Array();
var k=0;
var array=collectionB.value;
var length2=array.length;
for(var i=0;i<length1;i++)
for(var j=0;j<length2;j++)
if(collectionA[i].key==array[j]){
newArray[k]=collectionA[i].key;
k++;
}
  return newArray;
}
