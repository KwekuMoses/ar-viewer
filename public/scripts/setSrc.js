const setViewerAttributes = (Src, product, Color) => {
  // checka iphone vs android
  document.getElementById('the-viewer').setAttribute('src', +product + '.glb')
  document
    .getElementById('the-viewer')
    .setAttribute('ios-src', +product + '.usdz')
  console.log(Src)
}

const setListItemAttributes = (Src, product, Color) => {
  setViewerAttributes(Src, product, Color)
  let arForm = document.getElementById('arForm')
  arForm.submit()
}
