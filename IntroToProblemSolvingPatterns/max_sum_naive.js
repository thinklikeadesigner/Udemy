// function maxSubarraySum(arr, num) {
//   if ( num > arr.length){
//     return null;
//   }
//   var max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i ++){
//   let  temp = 0;
//     for (let j = 0; j < num; j++){
//       temp += arr[i + j]; 
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   console.log(1 + 1)
//   return max;

// }

// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))

// salary calculator


function toRange([lowhigh, highhigh], granularity){
  var list = [];
for (var i = lowhigh; i <= highhigh; i += granularity) {
  list.push(i);
}
console.log({list})
  return list
}



const negotiationRounds = (salaryRange, bestOffer) => {
  let array = toRange(salaryRange, 1000)
  let low = 0;
  let high = array.length - 1;
  let count = 0
  while (low <= high) {
      count++
      let currentOffer = Math.floor((low + high) / 2);
      if (array[currentOffer] === bestOffer) {
          return `found the best offer ${bestOffer} in ${count} rounds of negotiations`;
      } else if (array[currentOffer] < bestOffer) {
          low = currentOffer + 1;
      } else {
          high = currentOffer - 1;
      }
  }
  return "best offer out of range or change granularity";
}
console.log(negotiationRounds([130000, 150000], 135000))

// Math.max(array[currentOffer], bestOffer)
// 150000 is the highest, so add 150000 * .20 to range, and 150000 is new low
// user input, and also maybe, salary predictions to make calculator more accurate
// [130,000, 125,000, 180,000, 90,000] avg salary in your city
// collect more data, you can see all your past offers, and add them with more weight. weighted something algorithm.
// likelihood of a better offer, based off of negotiation rounds


