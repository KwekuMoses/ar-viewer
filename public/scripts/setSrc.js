const setViewerAttributes = (product, Color) => {
  // checka iphone vs android
  document.getElementById('the-viewer').setAttribute('src', product + '.glb')
  document
    .getElementById('the-viewer')
    .setAttribute('ios-src', product + '.usdz')
  console.log(product)
}

const setListItemAttributes = async (product, Color) => {
  // let arForm = document.getElementById('arForm')

  // arForm.submit()
  const request = await fetch('https://ipinfo.io/json?token=48c7527aaa89bb')
  const jsonResponse = await request.json()

  let city = jsonResponse.city
  let country = jsonResponse.country
  let userData = jsonResponse
  const data = { city, country, product, userData }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch('/', options)
  setViewerAttributes(product, Color)
}
