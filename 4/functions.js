function unique(array){
  var newArr = [];
  var len = array.length;
  var flag = false;
  var i = 0;
  while(i < len - 1){
    if(array[i] !== array[i+1]){
       newArr.push(array[i]);
      i++;
    }else{
      while(array[i] === array[i+1] && i < len - 1){
        i++;
        flag = true;
      }
      if(flag){
        i++;  
        flag = false;
      }
       
    }

  }
     if(array[len - 2] !== array[len - 1]){
      newArr.push(array[len - 1]);
    }
  return newArr;
}


var w =[1,2,2,3,4,5,5,5,5,5,6,7,7,7,8];
var u = unique(w);
console.log(u);
var w =[2,2,4,4,4,4,8,8,8,8,10,10];
var u = unique(w);
console.log(u);