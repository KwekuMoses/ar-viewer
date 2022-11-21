const fetchUserData = async (product) => {
  const request = await fetch('https://ipinfo.io/json?token=48c7527aaa89bb')
  const jsonResponse = await request.json()
  let city = jsonResponse.city
  let country = jsonResponse.country
  let userData = jsonResponse
  let viewer = document.getElementById('the-viewer')
  let elements = document.getElementsByClassName('item-drop')
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
    const fetchResponse = await fetch(`/`, options);
    const data = await fetchResponse.json();
    Array.from(elements).forEach(function (element) {
      element.addEventListener('click', activateAR)
    })
    viewer.activateAR()
    return data;
  } catch (e) {
    return e;
  }


}
