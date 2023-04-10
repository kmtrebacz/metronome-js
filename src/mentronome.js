// reading bmp value from range input
let inputRange = document.querySelector('input[type=range]')
let bpm = document.querySelector('#bmp')

inputRange.addEventListener('input', () => {
  const rangeValue = inputRange.value
  bpm.innerHTML = `${rangeValue} BPM`
})

// create red dots in amount of #dots input
document.querySelector('#dots').addEventListener('change', () => {
  const dotsAmount = document.querySelector('#dots').value
  const tempoPointers = document.getElementById('tempo-pointers')

  // Clear existing tempo pointers
  tempoPointers.innerHTML = ''

  for (let i = 1; i <= dotsAmount; i++){
    const newDot = document.createElement('div')
    newDot.setAttribute('class', 'tempo-pointer')
    newDot.setAttribute('id', i)
    console.log(newDot)
    console.log(i)
    tempoPointers.appendChild(newDot)
  }
})

document.querySelector('#start').addEventListener('click', () => {
for (let x = 1; x <= dotsAmount; x++) {
  for (let y = 1; y <= clicksAmount; y++) {
    setTimeout(() => {
      console.log(`${x}, ${y}`);
    }, y * 500);
  }
}
})

