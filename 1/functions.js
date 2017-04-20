function count(values,x){
  var counter = 0;
  var i=0;
  while(i<values.length){
    if(values[i] === x){
      counter++;   
      
    }
    i++;

  }
  return counter;
}

var v = [0,1,0,0,0,1,1,0,1];
var n = count(v,1);
console.log(n);
n =count(v,42);
console.log(n);

//  console.log(v);