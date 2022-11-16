function reverseString(message){
    // wirte your code here
    var result = "";
    for(var i = message.length-1; i >= 0; i--){
        result += message[i];
    }
    return result;
}

console.log(reverseString('hello')); // should return 'olleh'