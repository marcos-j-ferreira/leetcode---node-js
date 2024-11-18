

var isPalindrome = function(x) {

    var word = "" + x

    var name = word.split("");

    var letter = word.split("");

    var splitt =  letter.reverse();


    if ( splitt.toString() === name.toString()){
        return true
    }
    return false
};

var x = 100;

var print = isPalindrome(x);

console.log(print);