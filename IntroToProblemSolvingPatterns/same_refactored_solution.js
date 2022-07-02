function same(arr1, arr2){
    if(arr1.length !== arr2.length) return false;
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)) return false
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false
    }
    return true
}
same([1,2,3,2,5], [9,1,4,4,11])


//anagram style, with one object instead of 2

function same(first, second){
    if(first.length !== second.length) return false;
    let lookup = {}
  for (let i = 0; i < second.length; i++) {
let letter = second[i]
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
  for (let i = 0; i < first.length; i++) {  
        let letter = first[i];
let squared = letter ** 2
if (!(lookup[squared])) return false;
     lookup[squared] -= 1;
  }
    return true
}

console.log(same([1,3,3,2,5], [1,9,9,4,25]))


// if both arrays are in sorted order, you can iterate over a single array


function same(first, second){
    if(first.length !== second.length) return false;

  for (let i = 0; i < second.length; i++) {
let letter = second[i]
   if ((first[i]**2) != second[i]) return false
    }
return true
  }

console.log(same([1,3,2,3,5], [1,9,9,4,25]))