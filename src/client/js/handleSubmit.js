const baseUrl = 'http://api.geonames.org/searchJSON?q='
const user = '&username=nour_m&maxRows=10'

const search = document.getElementById('search');

search.addEventListener('click', generateInfo)

function generateInfo(e){
    e.preventDefault();
    let city = document.getElementById('location').value
    getInfo(baseUrl, city, user)
}

const getInfo = async (baseUrl, city, user) => {
    const res = await fetch(baseUrl + city + user);
    try{
      const data = await res.json();
      console.log(data);
      postData('/data',
       {countryName: data.geonames[0].countryName,
        latitude: data.geonames[0].lat,
        longitude: data.geonames[0].lng,
      }).then(res => {
        console.log(res);
        updateUI();
      })
      return data;
    }catch(error){
      console.log('error', error)
    }
  }


const postData = async ( url = '', data = {})=>{
    console.log(data)
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),      
    });
  
      try {
        const newData = await response.json();
        return newData
      }catch(error) {
      console.log("error", error);
      }
  }

  const updateUI = async() => {
    const update = await fetch('/');
    const data = await update.json();
    try{
      console.log(data)
      document.getElementById('country').innerHTML = 'Country:' + res.countryName;
      document.getElementById('long').innerHTML = 'Longitude' + res.longitude;
      document.getElementById('lat').innerHTML = 'Latitude' + res.latitude;
    } catch(error) {
      console.log('error', error)
    }
  }

  export {
      getInfo,
      generateInfo,
      postData,
      updateUI
  }