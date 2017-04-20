
function addItem(item,arr){
  if( !inArr(item,arr) ){
    arr.push(item);
  }
}


function isEqual(itemA,itemB){
  return (itemA[0] === itemB[0]) && (itemA[1] === itemB[1]);
}

function contain(itemA,itemB,remArr){
  if(itemA[0] <= itemB[0] && itemA[1] >= itemB[1]){
    addItem(itemB,remArr);
    return itemA;
  }
  if(itemA[0] >= itemB[0] && itemA[1] <= itemB[1]){
    addItem(itemA,remArr);
    return itemB;
  }else{
    return 0;
  }


}

function inArr(item,arr){
  var len = arr.length;
  var i = 0;
  while(i < len){
    if(isEqual(item,arr[i])){
      return true;
    }
    i++;
  }
  return false;
}



function merge(array){
  var len = array.length;
  var i = 0;
  var remArr = [];
  var j;
  var addArr = [];
  var container;
  var flag = false;
  while(i < len){
    j = i + 1;
    while(j < len){
      container = contain(array[i],array[j],remArr);
      if( container !== 0 && !inArr(container,addArr) ){
        if(flag){
          addArr.pop();
        }
        addArr.push(container); 
        flag = true;
      }
      j++;  
    }
    if(flag === true){
      flag = false
    }else{
      if(!inArr(array[i],remArr) && !inArr(array[i],addArr)){
        addArr.push(array[i]);    
      }
    }
    i++;
  }
  return addArr; 
}


var a = [[2,6],[3,4],[7,12],[8,9]]; // ====> [[2,6],[7,12]]
var out = merge(a);
console.log(out);

 a = [[2,6],[3,4],[8,9],[7,12]];   // ====> [[2,6],[7,12]]
 out = merge(a);
console.log(out);


 a = [[2,6],[3,4],[7,12],[8,9],[13,44]];   // ====> [[2,6],[7,12],[13,44]]
 out = merge(a);
console.log(out);

 a = [[15,33],[3,4],[18,20],[8,9],[13,44],[1,2],[8,11]];    // ====> [[13,44],[3,4],[8,11],[1,2]]
 out = merge(a);
console.log(out);

//instruction 
//merge the sets



