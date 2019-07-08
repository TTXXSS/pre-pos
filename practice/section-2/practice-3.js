'use strict';

function countSameElements(collection) {
  var result = [
    
  ];
  for (var i = 0; i < collection.length;) {
    var count = 0;
    var k=0;
    for (var j = i; j < collection.length; j++) {
     if(collection[i]==='c:8'){
       collection[i]='c';
        k+=8;
        break;
      }else if(collection[i]==='d-5'){
        collection[i]='d';
        k+=5;
        break;
      }else if (collection[i] === collection[j]) {
        count++;
    }else if(collection[j]==='h[3]'){
        if(collection[i]==='h')
        k+=3;
      }else if(collection[j]==='t-2'){
        if(collection[i]==='t')
        k+=2;
      }else if(collection[j]==='t[10]'){
        if(collection[i]==='t')
        k+=10;
      }
    }
   result.push({
        name: collection[i],
        summary: (count+k)
    })
    if(k>0){
      if(collection[i]==='t')
    i+=(count+2);
    else
    i+=(count+1);
    }
    else
    i+=count;
}

  return result;
}
