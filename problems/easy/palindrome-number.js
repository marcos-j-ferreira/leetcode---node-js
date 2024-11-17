

var isPalindrome = function(x) {

    var word = x + ""

    let split = word.split("")

    var size = split.length 

    for(var i = split.length -1 ; i >= 0; i--){

        var arr = []

        arr[size - i ] = split[i]

        if(arr == split){
            return true
        }

    }



    return false
};

var x = 121;

var print = isPalindrome(x);

console.log(print);