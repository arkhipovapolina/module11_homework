function printNumber (from ,to) {
    let start = from;
    let timerId = setInterval(function() {
      if (start <= to) {
        console.log(start);
        start++;  
      }
      else clearInterval(timerId);
  },1000);
  }
    printNumber(5,15);