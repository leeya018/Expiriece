function Xbonacci(sig,n){
  var numToSum = sig.length;
  var i = numToSum;
  var j = 0;
  var sum = 0;
  j=0;
  while(i < n){
    j = i - numToSum;
    while(j < i){
      sum += sig[j];
      j++
    }
    sig.push(sum);
    sum = 0;
    i++;
  }
  console.log(sig);
}


Xbonacci([1,1],10);
Xbonacci([1,1,1],8);
Xbonacci([1,1,1,1],10);
Xbonacci([0,0,0,0,1],10);
