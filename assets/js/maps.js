// Set Up Map

const streets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let map = L.map('map', { layers: [streets] }).fitWorld();

const basemaps = { "Streets": streets };
const buildingMarkers = L.markerClusterGroup();
const overlays = { "Buildings": buildingMarkers };
const layerControl = L.control.layers(basemaps, overlays).addTo(map);

function onLocationFound(e) {
    const latitude = e.latlng['lat'];
    const longitude = e.latlng['lng'];
    map.panTo(latitude, longitude);
}

map.on('locationfound', onLocationFound);
map.locate({ setView: true, maxZoom: 6 });

const buildingIcon = L.ExtraMarkers.icon({
    prefix: 'fa',
    icon: 'fa-building',
    iconColor: 'white',
    svg: true,
    markerColor: '#970043',
    shape: 'square'
});

// Get the Building Information

let buildingCoords = [];

let buildingLocations = [[52.2320998, 0.1415806,
    "Cambridge Science Park","BCS Event in June 2012"], [52.6211393, -1.1246325, "University of Leicester"

], [52.4455676, -1.8271322, "Best Western Hotel Acocks Green (Birmingham)","BCS Event in Feburary 2011"],
[51.5071851, -0.1316683, "IoD Pall Mall London","BCS Annual Dinner in September 2011"],
[52.4850317, -2.1150972, "Copthorne Hotel Merry Hill Dudley","Ideal for Conferences"],
[51.4920396, -0.2198412, "Novotel Hotel London West Hammersmith","Ideal for Conferences"],
[51.4985245, -0.1908758, "Copthorne Tara Hotel London Kensington","Ideal for Conferences"],
[51.521232, -0.124308, "De Morgan House (Conference Centre) Russell Square, London","IMA Event in 2005"],
[52.1966209, 0.1307118, "Raspberry Pi Foundation","Ideal for Meetups"],
[52.2000961, 0.1384987, "Hot Numbers Cambridge","Ideal for Meetups"],
[52.20744, 0.122225, "The Cambridge Brew House","Ideal for Meetups"],
[52.2096674, 0.1192446, "The Maypole Cambridge","Ideal for Meetups"],
[52.1961124, 0.155374, "The Brook Cambridge","Ideal for Meetups"],
[52.2188359, 0.1139751, "The Hop and Grain Store Cambridge","Ideal for Meetups"],
[52.2006212, 0.126302, "Chesterton Mill Cambridge","Ideal for Meetups"]

];

for (let i=0;i<buildingLocations.length; i++) {
    let buildingArticleText = '';
    let arr = buildingLocations[i];
    let title = arr[2];
    let purpose = arr[3];
    let latitude = arr[0];
    let longitude = arr[1];

    // Build the Text
    buildingArticleText += `<h4>${title}</h4>`;
    buildingArticleText += `<p>${purpose}</p>`;

    // Add Latitude, Longitude, Title and Text to buildingCoords array
    buildingCoords.push([latitude, longitude, title, buildingArticleText]);

}

// Plot the Buildings

for (let i=0; i<buildingCoords.length; i++) {
    let arr = buildingCoords[i];
    let title = arr[2];
    let description = arr[3];
    let marker = L.marker(new L.LatLng(arr[0], arr[1]), {icon: buildingIcon, title: title});
    marker.bindPopup(description);
    buildingMarkers.addLayer(marker);
}

map.addLayer(buildingMarkers);
