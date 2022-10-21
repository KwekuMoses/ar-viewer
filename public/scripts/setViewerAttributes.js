const setViewerAttributes = (product) => {
  document.getElementById('the-viewer').setAttribute('src', product + '.glb')
  document
    .getElementById('the-viewer')
    .setAttribute('ios-src', product + '.usdz')

  console.log('set')
}
