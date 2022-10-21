const setViewerAttributes = async (product) => {
  await fetchUserData(product).then(() => {
    document.getElementById('the-viewer').setAttribute('src', product + '.glb')
    document
      .getElementById('the-viewer')
      .setAttribute('ios-src', product + '.usdz')
  })
}
