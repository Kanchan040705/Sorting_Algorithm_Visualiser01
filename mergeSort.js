window.mergeSort = async function () {
    if (!array || array.length === 0) {
    setStatus("🔔 Please generate an array first!", "red");
    return;
  }
  
  stopRequested = false;
  setButtonsDisabled(true);
  await mergeSortHelper(0, array.length - 1);
   stopRequested = true;
   setButtonsDisabled(false);
  setStatus("Sorted");
};

async function mergeSortHelper(start, end) {
  if (stopRequested) return;
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  await mergeSortHelper(start, mid);
  await mergeSortHelper(mid + 1, end);
  await merge(start, mid, end);
}

async function merge(start, mid, end) {
  if (stopRequested) return;

  const left = array.slice(start, mid + 1);
  const right = array.slice(mid + 1, end + 1);

  let i = 0, j = 0, k = start;
  const bars = document.getElementsByClassName('bar');

  while (i < left.length && j < right.length) {
    if (stopRequested) return;

    bars[k].style.backgroundColor = 'red';
    await delay(60);

    if (left[i] < right[j]) {
      array[k] = left[i++];
    } else {
      array[k] = right[j++];
    }

    renderArray();
    bars[k].style.backgroundColor = 'teal';
    k++;
  }

  while (i < left.length) {
    if (stopRequested) return;

    array[k++] = left[i++];
    renderArray();
    await delay(60);
  }

  while (j < right.length) {
    if (stopRequested) return;

    array[k++] = right[j++];
    renderArray();
    await delay(60);
  }
}
