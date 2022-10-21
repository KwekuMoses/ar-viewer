const fetchUserData = async (product) => {
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
  console.log('fetch')
}
