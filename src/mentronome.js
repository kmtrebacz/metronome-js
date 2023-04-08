// reading bmp value from range input
let inputRange  = document.querySelector('input[type=range]')
let bmp = document.querySelector('#bmp')

inputRange.addEventListener('input', () => {
  const rangeValue = inputRange.value
  bmp.innerHTML = `${rangeValue} BPM`
})
