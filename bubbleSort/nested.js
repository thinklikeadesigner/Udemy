function bubbleSortNested( arr ) {
    let n = arr.length + 1
    // create a variable to remember whether a swap has occurred
  
    // begin iterating over the array until a swap does not occur:
  
    for (let j = 0; j < n-1; ++j){
    for (let i = 0; i < n-j-1; ++i){
      if (arr[i] > arr[i+1])
        [arr[i], arr[i+1]] = [arr[i + 1], arr[i]]
      // set swap tracker to false
    }}
      // for each element in the array:
      
        // swap each element with the next element if the next element is smaller
      return arr  
    // return the sorted array
  }
  console.log(bubbleSortDo([2,3,4,2]))
  