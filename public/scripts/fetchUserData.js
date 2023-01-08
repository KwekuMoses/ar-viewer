let viewer = document.getElementById('the-viewer')

const fetchUserData = async (product, catalog) => {
  console.log(catalog)
  // const request = await fetch('https://ipinfo.io/json?token=48c7527aaa89bb')
  // const jsonResponse = await request.json()

  // let userData = jsonResponse
  const data = {
    product,
    // userData, 
    catalog
  }
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)

  }
  viewer.activateAR()

  try {
    const fetchResponse = await fetch(`/`, options);
    const data = await fetchResponse.json()
    return data;
  } catch (e) {
    return e;
  }



}
