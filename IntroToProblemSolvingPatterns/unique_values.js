function countUniqueValues(nums){
    if(nums.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j]
        }
        console.log(i,j)
    }
    return i + 1;
}
console.log(countUniqueValues([1,2,2,5,7,7,99]))
console.log(countUniqueValues([1, 1, 1, 2,2, 3,  4, 5, 5,5, 6, 7]))

