// Set Up Map

const streets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

let map = L.map('map', { layers: [streets] }).fitWorld();

const basemaps = { "Streets": streets, "Satellite": satellite };
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
    "Cambridge Science Park",{description: "BCS Event in June 2012", url:""}], [52.6211393, -1.1246325, "University of Leicester",{description:"BCS Events in 2005",url:""}

], [52.4455676, -1.8271322, "Best Western Hotel Acocks Green (Birmingham)",{description:"BCS Event in Feburary 2011",url:""}],
[51.5071851, -0.1316683, "IoD Pall Mall London",{description:"BCS Annual Dinner in September 2011",url:""}],
[52.4850317, -2.1150972, "Copthorne Hotel Merry Hill Dudley",{description:"Ideal for Conferences",url:""}],
[51.4920396, -0.2198412, "Novotel Hotel London West Hammersmith",{description:"Ideal for Conferences",url:""}],
[51.4985245, -0.1908758, "Copthorne Tara Hotel London Kensington",{description:"Ideal for Conferences",url:""}],
[51.521232, -0.124308, "De Morgan House (Conference Centre) Russell Square, London",{description:"IMA Event in April 2005",url:"https://www.demorganhouse.org.uk/"}],
[52.1966209, 0.1307118, "Raspberry Pi Foundation",{description:"Ideal for Meetups",url:""}],
[52.2000961, 0.1384987, "Hot Numbers Cambridge",{description:"Ideal for Meetups",url:"https://hotnumberscoffee.co.uk/gwydir-st/"}],
[52.20744, 0.122225, "The Cambridge Brew House",{description:"Ideal for Meetups",url:""}],
[52.2096674, 0.1192446, "The Maypole Cambridge",{description:"Ideal for Meetups",url:""}],
[52.1961124, 0.155374, "The Brook Cambridge",{description:"Ideal for Meetups",url:""}],
[52.2188359, 0.1139751, "The Hop and Grain Store Cambridge",{description:"Ideal for Meetups",url:""}],
[52.2006212, 0.126302, "Chesterton Mill Cambridge",{description:"Ideal for Meetups",url:"https://www.chestertonmill.com/"}],
[52.239520, 0.278297, "Black Horse Inn Swaffham Bulbeck",{description:"Valentines Dinner Date",url:"https://blackhorseinnswaffham.co.uk/"}],
[53.347690, -2.880654, "Crowne Plaza Liverpool John Lennon Airport",{description:"National Conference on Come Fly with Us in 2002",url:"https://www.ihg.com/crowneplaza/hotels/gb/en/liverpool/lplcp/hoteldetail"}]

];

for (let i=0;i<buildingLocations.length; i++) {
    let buildingArticleText = '';
    let arr = buildingLocations[i];
    let title = arr[2];
    let purpose = arr[3]['description'];
    let url = arr[3]['url'];
    let latitude = arr[0];
    let longitude = arr[1];

    // Build the Text
    buildingArticleText += `<h4>${title}</h4>`;
    buildingArticleText += `<p>${purpose}</p>`;
    buildingArticleText += `<p class="text-center"><a href="https://${url}" target="_blank" title="View Website for ${title}">View Website</a></p>`;

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
