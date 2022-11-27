
  function bubbleSort( arr ) {
    // create a variable to remember whether a swap has occurred
  let swapped;
    // begin iterating over the array until a swap does not occur:
    
    do {
      swapped = false;
      
      for (let i = 0; i < arr.length; i++){
        if (arr[i]> arr[i+1]){
          [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
          swapped = true
        }
      }
    } while (swapped)
  
      // set swap tracker to false
      // for each element in the array:
      
        // swap each element with the next element if the next element is smaller
      return arr  
  }