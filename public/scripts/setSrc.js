const setViewerAttributes = (product, Color) => {
  // checka iphone vs android
  document.getElementById('the-viewer').setAttribute('src', product + '.glb')
  document
    .getElementById('the-viewer')
    .setAttribute('ios-src', product + '.usdz')
  console.log(product)
}

const setListItemAttributes = async (product, Color) => {
  setViewerAttributes(product, Color)
  // let arForm = document.getElementById('arForm')

  // arForm.submit()
  const request = await fetch('https://ipinfo.io/json?token=48c7527aaa89bb')
  const jsonResponse = await request.json()

  console.log(jsonResponse.city, jsonResponse.country)
  let city = jsonResponse.city
  let country = jsonResponse.country
  // let roduct = document.getElementById('arForm').product
  // let catalog = document.getElementById('arForm').catalog
  console.log(product)
  const data = { city, country, product }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch('/', options)
}
