 //code me
  var numString = num.toString();
  var numArray = numString.split().map(function(t) {
    return parseInt(t);
  });


  function reducer(theNumArray) {
    let sum = 1;
    for (var i = 0; i < theNumArray.length; i++) {
      sum = sum * theNumArray[i];

    }
    return sum;
  }
  newNum = reducer(numArray);

  console.log(newNum);
};

persistence(485);