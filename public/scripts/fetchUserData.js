const fetchUserData = async (product) => {
  const request = await fetch('https://ipinfo.io/json?token=48c7527aaa89bb')
  const jsonResponse = await request.json()
  let city = jsonResponse.city
  let country = jsonResponse.country
  let userData = jsonResponse
  const data = { city, country, product, userData }
  let dataString = json.stringify(data)
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: dataString
  }
  // fetch('/', options)

  try {
    const fetchResponse = await fetch(`https://still-lake-53402.herokuapp.com/`, options);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }


}
