const setViewerAttributes = (product, Color) => {
  // checka iphone vs android
  document.getElementById('the-viewer').setAttribute('src', product + '.glb')
  document
    .getElementById('the-viewer')
    .setAttribute('ios-src', product + '.usdz')
  console.log(product)
}

const setListItemAttributes = (product, Color) => {
  setViewerAttributes(product, Color)
  let arForm = document.getElementById('arForm')
  arForm.submit()
}
