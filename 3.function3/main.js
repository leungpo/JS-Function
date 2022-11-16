function alphabetSort(message){
    // wirte your code here
    function compare(a,b){
        return a.charCodeAt(0) - b.charCodeAt(0);
    }
    var arr = message.split("");
    return arr.sort(compare).join("");

  }
  console.log(alphabetSort('hello')); // should return 'ehllo'