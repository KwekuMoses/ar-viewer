let viewer = document.getElementById('the-viewer')

const fetchUserData = async (product, catalog) => {
  const request = await fetch('https://ipinfo.io/json?token=48c7527aaa89bb')
  const jsonResponse = await request.json()
  let city = jsonResponse.city
  let country = jsonResponse.country
  let userData = jsonResponse
  const data = { city, country, product, userData, catalog }
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)

  }

  // try {
  // const fetchResponse = await fetch(`/`, options);
  await fetch(`/`, options);
  //   const data = await fetchResponse.json()
  //   return data;
  // } catch (e) {
  //   return e;
  // }

  viewer.activateAR()


}
