/* why do i need to explicitly  set 
     arr[i+1] = arr[i+1].toUpperCase()

     in first case but not second

*/

function toCamelCase(str){

    let arr = str.split('')
    
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == "_"){
  console.log(arr[i+1].toUpperCase())
     arr[i+1] = arr[i+1].toUpperCase()
  arr[i] = ""
      }else if (arr[i] == "-"){
        console.log(arr[i+1].toUpperCase())
        arr[i+1].toUpperCase()
  arr[i] = ""
      }
    } 
  console.log({arr})
  return arr.join('')
  
  }
  
/**
 * 
 * @param {23453425} n typeof number
 * @returns 55443322 n typeof number
 * 
 * 
 * to make a string into a number, you have to put the string in the paranthesis like
 * parseInt("this is a string")
 * 
 */

  function descendingOrder(n){

    let p = 23452345
    
    let x = n.toString().split('').map(i => parseInt(i))
    
    console.log(x)
    
    let y = x.sort((a,b) => b - a)
    
    console.log(y)
    
    let z = y.join('')
    console.log(z)
      let t = parseInt(z)
    
    return t
    }