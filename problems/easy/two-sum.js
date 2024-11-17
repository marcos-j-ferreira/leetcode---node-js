var twoSum = function(nums, target) {
    

    var size = nums.length  
    let result = []


    for(var i = 0; i <= size; i++){
        for(var j = i + 1; j < size ; j++){

            var sum = nums[i] + nums[j]
            if(sum == target){
                result.push(i, j)
                return result
            }
        }
    }
    
};

var target = 0

var nums = [0,4,3,0]

let a = twoSum(nums, target)

console.log(a)