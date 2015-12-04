exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  var i = 2;
  while (i <= n){
    if (isDivisible(n, i)) {
      if (isPrime(i)) {
        console.log(i);
        primeNumber = i;
      }
    }
    i++;
  }
  return primeNumber;
};

  function isDivisible(n, i){
  if(n % i === 0){
    return true;
  } else {
    return false;
  }
}

  function isPrime(value){
    for (i = 2; i < value; i++){
      if (value % i === 0){
        return false;
      }
    }
    return value;
}