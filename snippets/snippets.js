

// create counter object to keep track of occurances
// works with strings or arrays

function frequencyCounter(arr){
    let obj = {}
    
    for (const i of arr){
obj[i] = (obj[i] || 0) + 1
    }
console.log({obj})
    return obj
}
frequencyCounter(["a","s","d","f","d","f","d","f"])
frequencyCounter("assdfgdfsdf")

// compare values of keys between 2 objects, assuming total tally in obj values == length of string

function compareValues(string,obj){
    for ( letter of string){
        console.log({obj})
        if (!obj[letter]) {
            return false
        } else {
            obj[letter] -= 1
            console.log({obj})
        }
        }
        return true
}

console.log(compareValues("assdfgdfsdf", { a: 1, s: 3, d: 3, f: 3, g: 1 } )) // true
console.log(compareValues("assdfgdfsdf", { a: 1, s: 2, d: 3, f: 3, g: 1 } )) // false
