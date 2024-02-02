// Assignment 2 - Merge Sort
function mergeSort(array = []) {
  // Base case (check if the element only itself or not - only itself = already sorted)
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid, array.length);

  mergeSort(leftArray);
  mergeSort(rightArray);
  merge(leftArray, rightArray, array);

  return array;
}

function merge(leftArray, rightArray, array) {
  const leftSize = Math.floor(array.length / 2);
  const rightSize = array.length - leftSize;

  let i = 0,
    l = 0,
    r = 0;

  while (l < leftSize && r < rightSize) {
    // Change the `<` to make it reversed (High to low)
    if (leftArray[l] < rightArray[r]) {
      array[i] = leftArray[l];
      i++;
      l++;
    } else {
      array[i] = rightArray[r];
      i++;
      r++;
    }
  }

  while (l < leftSize) {
    array[i] = leftArray[l];
    i++;
    l++;
  }

  while (r < rightSize) {
    array[i] = rightArray[r];
    i++;
    r++;
  }
  return array;
}

console.log(mergeSort([])); //[]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); //[0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); //[79, 100, 105, 110]
console.log(mergeSort([4, 9, -2, 1, 38])); //[-2, 1, 4, 9 ,38]
