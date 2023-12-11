
let map = L.map('map').setView([51.505, -0.09], 2);
let data; 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countriesData => {
    data = countriesData; 
    const selectElement = document.getElementById('paises');
    data.forEach(country => {
      const optionElement = document.createElement('option');
      optionElement.value = country.name.common;
      optionElement.textContent = country.name.common;
      selectElement.appendChild(optionElement);
    });
  })
  .catch(error => {
    console.error('Erro:', error);
  });


function changeMapCountry() {
  const selectElement = document.getElementById('paises');
  const selectedCountry = selectElement.value;
  const countryData = data.find(country => country.name.common === selectedCountry);
  if (countryData) {
    const latLong = [countryData.latlng[0], countryData.latlng[1]];
    map.setView(latLong, 8);
  }
}


const selectElement = document.getElementById('paises');
selectElement.addEventListener('change', changeMapCountry);

let latLong = [-14.794851092521004, -39.25978803993592];
map.setView(latLong, 8);