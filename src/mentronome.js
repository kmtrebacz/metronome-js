// reading bmp value from range input
let inputRange  = document.querySelector('input[type=range]')
let bmp = document.querySelector('#bmp')

inputRange.addEventListener('input', () => {
  const rangeValue = inputRange.value
  bmp.innerHTML = `${rangeValue} BPM`
})

// create red dots in amount of #dots input
document.querySelector('#dots').addEventListener('change', () => {
  const dotsAmount = document.querySelector('#dots').value;
  const tempoPointers = document.getElementById('tempo-pointers');

  // Clear existing tempo pointers
  tempoPointers.innerHTML = '';

  for (let i = 1; i <= dotsAmount; i++){
    const newDot = document.createElement('div');
    newDot.setAttribute('class', 'tempo-pointer');
    console.log(newDot);
    console.log(i);
    tempoPointers.appendChild(newDot);
  }
});

