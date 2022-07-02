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

function same(first, second){
    if(first.length !== second.length) return false;

  for (let i = 0; i < second.length; i++) {
let letter = second[i]
   if ((first[i]**2) != second[i]) return false
    }
//   for (let i = 0; i < first.length; i++) {  
//         let letter = first[i];
// let squared = letter ** 2
// if (!(lookup[squared])) return false;
//      lookup[squared] -= 1;
return true
  }
// }
