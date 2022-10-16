const setViewerAttributes = (Src, product, Color) => {
  // checka iphone vs android
  document
    .getElementById('the-viewer')
    .setAttribute('src', Src + '/' + Color + '/' + product + '.glb')
  document
    .getElementById('the-viewer')
    .setAttribute('ios-src', Src + '/' + Color + '/' + product + '.usdz')
  console.log(Src)
}

const setListItemAttributes = (Src, product, Color) => {
  console.log('lol')
  setViewerAttributes(Src, product, Color)
  let arForm = document.getElementById('arForm')
  arForm.submit()
}
