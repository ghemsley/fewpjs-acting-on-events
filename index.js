// Your code here
const dodger = document.getElementById('dodger')
document.addEventListener('keydown', (e) => {
  if (e.key == 'ArrowLeft') {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', (e) => {
  if (e.key == 'ArrowRight') {
    moveDodgerRight()
  }
})

const moveDodgerLeft = () => {
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

const moveDodgerRight = () => {
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)

  if (left < window.innerWidth + dodger.style.width) {
    dodger.style.left = `${left + 1}px`
  }
}
