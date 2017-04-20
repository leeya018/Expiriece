function reverse(array){
  var len = array.length;
  var mid = len/2;
  var i = 0;
  var temp;
  while(i<mid){
    temp1 = array[i];
    temp2 = array[len-1-i];
    array[i] = temp2;
    array[len-1-i] = temp1;
    i++;
  }
  
}

var v = [1,2,3,4,5,6,7];
reverse(v);
console.log(v);