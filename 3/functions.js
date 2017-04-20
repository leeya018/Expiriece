

function average(array,low,high){
  var i = 0;
  var len = array.length;
  var sum = 0;
  var avg=0;
  var counter=0;
  while(i < len){

    if(array[i] >= low && array[i] <= high){
      sum += array[i];
      counter++;
    }
    i++; 
  }
  if(counter > 0){
    avg = sum / counter;  
  }
  
  return avg;
  
  
}

var v = [1,2,3,4,5,6,7,8,9];
 console.log(average(v,3,8));
 console.log(average(v,3,5));
console.log(average(v,3,2));