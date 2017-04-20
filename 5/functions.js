
function squarsInRect(a,b){
  var arr = [];
  while(a > 0 && b > 0){
    if(a < b){
      b -= a;
      arr.push(a);
    }
    if(b < a){
      a -= b;
      arr.push(b);
    }
    if(a === b){
      a = 0;
      b = 0;
      arr.push(a);
    }
   
  }
  return arr;

}


var sqrs = squarsInRect(5,3);
console.log(sqrs);

var sqrs = squarsInRect(3,5);
console.log(sqrs);

var sqrs = squarsInRect(5,5);
console.log(sqrs);
var sqrs = squarsInRect(3000,2000);
console.log(sqrs);
