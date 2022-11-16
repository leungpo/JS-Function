function palindrome(message){
    // wirte your code here
    if(message.length % 2 == 0){
        var left = message.substring(0,message.length/2);
        var temp = message.substring(message.length/2, message.length);
        
    }
    else{
        var left = message.substring(0,Math.round(message.length/2));
        var temp = message.substring(Math.round(message.length/2)-1,message.length);
    }
    var right = "";
    for(var i = temp.length-1; i >= 0; i--){
        right += temp[i];
    }

    if(left == right){
        return true;
    }
    else{
        return false;
    }
  }
  console.log(palindrome('hello')); // should return false
  console.log(palindrome('abcba')); // should return true
