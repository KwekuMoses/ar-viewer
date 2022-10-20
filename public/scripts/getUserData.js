const getUserData = async () => {
  const request = await fetch('https://ipinfo.io/json?token=48c7527aaa89bb')
  const jsonResponse = await request.json()

  console.log(jsonResponse.city, jsonResponse.country)
  let city = jsonResponse.city
  let country = jsonResponse.country

  const data = { city, country }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch('/', options)
}

getUserData()
