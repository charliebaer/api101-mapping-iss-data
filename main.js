/*
const apiUrl = "https://api.wheretheiss.at/v1/satellites/25544";

//making tiles and map
const mymap = L.map('issMap').setView([0, 0], 1);

const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

//custom icon
const myIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [50, 50],
    iconAnchor: [0, 0]
});
L.marker([50.505, 30.57], { icon: myIcon }).addTo(mymap);

const marker = L.marker([0, 0]).addTo(mymap);


async function getIss() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    //displaying the data on page
    document.getElementById('lat').textContent = data.latitude;
    document.getElementById('lon').textContent = data.longitude;
    marker.setLatLng([data.latitude, data.longitude]);


}

getIss();
*/
 // Making a map and tiles
      // Setting a higher initial zoom to make effect more obvious
      const mymap = L.map('issMap').setView([0, 0], 6);
      const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

      const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const tiles = L.tileLayer(tileUrl, { attribution });
      tiles.addTo(mymap);

      // Making a marker with a custom icon
      const issIcon = L.icon({
        iconUrl: 'iss.png',
        iconSize: [50, 32],
        iconAnchor: [25, 16]
      });
      let marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

      const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

      let firstTime = true;

      async function getISS() {
        const response = await fetch(api_url);
        const data = await response.json();
        const { latitude, longitude } = data;

        // Always set the view to current lat lon and zoom!
        mymap.setView([latitude, longitude], mymap.getZoom());
        marker.setLatLng([latitude, longitude]);

        document.getElementById('lat').textContent = latitude.toFixed(2);
        document.getElementById('lon').textContent = longitude.toFixed(2);
      }

      getISS();
      setInterval(getISS, 1000);