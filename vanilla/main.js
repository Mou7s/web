function pickPeaks(arr) {
  var pos = [],
    peaks = [];
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      var j = i;
      while (arr[i] == arr[j]) j++;
      if (arr[i] > arr[j]) {
        pos.push(i);
        peaks.push(arr[i]);
      }
    }
  }
  return { pos: pos, peaks: peaks };

  //  return {pos:[],peaks:[]}
}
