window.selectionSort = async function () {
    if (!array || array.length === 0) {
    setStatus("🔔 Please generate an array first!", "red");
    return;
  }
  
  stopRequested = false;
  setButtonsDisabled(true);
  const bars = document.getElementsByClassName('bar');

  for (let i = 0; i < array.length; i++) {
    if (stopRequested) return;

    let minIndex = i;
    bars[minIndex].style.backgroundColor = 'purple';

    for (let j = i + 1; j < array.length; j++) {
      if (stopRequested) return;

      bars[j].style.backgroundColor = 'orange';
      await delay(50);

      if (array[j] < array[minIndex]) {
        bars[minIndex].style.backgroundColor = 'teal';
        minIndex = j;
        bars[minIndex].style.backgroundColor = 'purple';
      } else {
        bars[j].style.backgroundColor = 'teal';
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      renderArray();
    }

    bars[i].style.backgroundColor = 'green';
  }
   stopRequested = true;
   setButtonsDisabled(false);
  setStatus("Sorted");
};
