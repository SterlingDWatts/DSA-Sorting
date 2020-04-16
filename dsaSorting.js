/*
1. Understanding merge sort
  Given [21, 1, 26, 45, 29, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
  * What is the resulting list to be sorted after 8 recursive calls of mergeSort?
    [21, 1, 26, 45]
  * What is the resulting list that will be sorted after 16?
    [40]
  * What are the first two lists to be merged?
    [21] and [1]
  * Which two lists would be merged on the 7th merge?
    [43] and [34]
2. Understanding quicksort
  1) The pivot could have been 14 or 17
    * in both cases all numbers to the left are less than and all to the right are greater than
  2) Given [14, 17, 13, 15, 19, 10, 3, 16, 9, 12], show list after second parition
    * When using the last item as pivot: [3, 9, 10, 12, 14, 17, 13, 15, 19, 16]
    * When using the first item as pivot: [10, 3, 9, 12, 13, 14, 17, 15, 19, 16]
*/

const dsaSorting = {
  qSort(arr, start = 0, end = arr.length) {
    if (start >= end) {
      return arr;
    }
    const middle = this.partition(arr, start, end);
    arr = this.qSort(arr, start, middle);
    arr = this.qSort(arr, middle + 1, end);
    return arr;
  },
  partition(arr, start, end) {
    const pivot = arr[end - 1]
    let j = start;
    for (let i = start; i < end - 1; i++) {
      if (arr(i) < pivot) {
        swap(arr, i, j);
        j++;
      }
    }
    swap(arr, end - 1, j);
    return j;
  },
  mSort(arr) {
    if (arr.length <= 1) {
      return arr
    }

    const middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    left = this.mSort(left)
    right = this.mSort(right)
    this.merge(left, right, arr)
  },
  merge(left, right, arr) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        arr[outputIndex++] = left[leftIndex++]
      } else {
        arr[outputIndex++] = right[rightIndex++]
      }
    }
    return arr;
  },
  shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
      const random = Math.floor(Math.random() * arr.length);
      temp = arr[i]
      arr[i] = arr[random]
      arr[random] = temp;
    }
    return arr;
  }
}

module.exports = dsaSorting;
