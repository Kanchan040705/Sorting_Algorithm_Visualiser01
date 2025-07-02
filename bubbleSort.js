window.bubbleSort = async function () {
    if (!array || array.length === 0) {
    setStatus("🔔 Please generate an array first!", "red");
    return;
  }
  
  stopRequested = false;
  setButtonsDisabled(true);
  const bars = document.getElementsByClassName('bar');

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (stopRequested) return;

      bars[j].style.backgroundColor = 'red';
      bars[j + 1].style.backgroundColor = 'red';

      await delay(50);

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        renderArray();
      }

      bars[j].style.backgroundColor = 'teal';
      bars[j + 1].style.backgroundColor = 'teal';
    }
  }
   stopRequested = true;
   setButtonsDisabled(false);
  setStatus("Sorted");
};
