/* 
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/


var romanToInt = function(s) {
    
    var letter = s.split("")
    var result = 0;

    for(var i =0; i < letter.length; i++){

        if(letter[i] == 'I'){
            result = result + 1
        }else if(letter[i] == 'V'){
            result = result + 5
        }else if(letter[i] == 'X'){
            result = result + 10
        }else if(letter[i] == 'L'){
            result = result + 50
        }else if(letter[i] == 'C'){
            result = result + 100
        }else if(letter[i] == 'D'){
            result = result + 500
        }else if(letter[i] == 'M'){
            result = result + 1000
        }
    }
    return result
};

var s = "MCMXCIV"

var print = romanToInt(s)


console.log(print)