function findMinAndRemove(array){
  let currentMin = array[0];                // set current min to first item of array
  let minIndex = 0;                         // set minimum index to 0
  for (let i = 0; i < array.length; i++) {  // loop through array
    let currentElement = array[i];          // set current element to an iteration through the array
    if (array[i] < currentMin) {            // if the current iteration is less than the currentMin (first array item)
      currentMin = currentElement;          // set the first item of the array to the current element
      minIndex = i;                         // set the minimum index to the current iteration
    }
  }
  array.splice(minIndex, 1);                // splice at the minimum index
  return currentMin;                        // return the value of the first array item
}

function selectionSort(array){
  let min;                                  // declare min
  let sorted = [];                          // define empty results array
  while (array.length != 0) {               // loop through array
    min = findMinAndRemove(array);          // call findMinAndRemove, taking in an array, which returns the minimum number
    sorted.push(min);                       // push the min into the empty array
  }
  return sorted;                            // return the results array
}