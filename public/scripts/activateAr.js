let viewer = document.getElementById('the-viewer')
let elements = document.getElementsByClassName('item-drop')

const activateAR = () => {
  viewer.activateAR()
  console.log('activate')
}

Array.from(elements).forEach(function (element) {
  element.addEventListener('click', activateAR)
})
