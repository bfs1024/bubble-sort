//bubble sort algorith compares neighbor pairs and swapts them if the pair on the left if greater than pair on right

var arr = [1,3,2,7,9,34,67,23,44,67,88];

function bubbleSort(arr) {
  var i;        ///left value
  var j;        ///right value
  var temp;  ///temp storage for left value when swap takes place
  var len = arr.length;   ///equals length of array

  /// while loop decrements value of length until index zero is reached 
  while (len--) {  
    // runs for-loop as long the array has not reached zero (still has a length) comapres each pair
    for(i= 0, j = 1;i < arr.length; i++, j++){
      //comparing takes place: if element on the left is > than element on right, then swap values
      if(arr[i] > arr[j]) {
        ///swpping of value takes place within the next three var
        temp = arr[i];  ///holds value of left while swap takes place
        arr[i] = arr[j];  ///assigns value on right to value on left
        arr[j] = temp;  ////assigns value of right value of left , final swap 
      }
    }
  }
    return arr;
}

console.log(bubbleSort(arr));
