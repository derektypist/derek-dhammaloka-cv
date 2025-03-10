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
    "Cambridge Science Park", { description: "BCS Event - Cambridge Data Mash Up June 2012", url: "https://www.cambridgesciencepark.co.uk" }], [52.6211393, -1.1246325, "University of Leicester", { description: "BCS Events between 2005 and 2015.", url: "https://le.ac.uk" }

], [52.4455676, -1.8271322, "Best Western Hotel Acocks Green (Birmingham)", { description: "BCS Event with Birmingham Branch in Feburary 2011.", url: "https://bestwesternwestley.hotels-birmingham.net/en" }],
[51.5071851, -0.1316683, "IoD Pall Mall London", { description: "BCS Annual Dinner in September 2011", url: "https://www.iod.com/about-116-pall-mall" }],
[52.4850317, -2.1150972, "Copthorne Hotel Merry Hill Dudley", { description: "IQPS National Conference and AGM 1-3 October 2004.  Ambassadors of Excellence.", url: "https://www.millenniumhotels.com/en/dudley/copthorne-hotel-merry-hill-dudley" }],
[51.4920396, -0.2198412, "Novotel Hotel London West Hammersmith", { description: "IQPS Spring Conference on Vision Without Boundaries in April 2002.", url: "https://all.accor.com/hotel/0737/index.en.shtml" }],
[51.4985245, -0.1908758, "Copthorne Tara Hotel London Kensington", { description: "IQPS Spring Conference (24 April 2004) on Ambassadors of Excellence.", url: "https://www.millenniumhotels.com/en/london/copthorne-tara-hotel-london-kensington" }],
[51.521232, -0.124308, "De Morgan House (Conference Centre) Russell Square, London", { description: "IMA Event in April 2005", url: "https://www.demorganhouse.org.uk" }],
[52.1966209, 0.1307118, "Raspberry Pi Foundation", { description: "Meetups with Cambridge Python User Group between December 2019 and February 2020.", url: "https://www.raspberrypi.org" }],
[52.2000961, 0.1384987, "Hot Numbers Cambridge", { description: "Meetup Event with JavaScript & NodeJS Cambridge in January 2020.", url: "https://hotnumberscoffee.co.uk/gwydir-st" }],
[52.20744, 0.122225, "The Cambridge Brew House", { description: "Meetup Event with Cambridge DevOps, Dev & Test Gathering in November 2019.", url: "https://www.thecambridgebrewhouse.com" }],
[52.2096674, 0.1192446, "The Maypole Cambridge", { description: "Meetup Event with JavaScript & NodeJS Cambridge in January 2023.", url: "http://maypolefreehouse.co.uk" }],
[52.1961124, 0.155374, "The Brook Cambridge", { description: "Meetups with Cambridge Singles between January 2023 and February 2023.", url: "https://thebrookpub.co.uk" }],
[52.200659,  0.126679, "The Grain & Hop Store Cambridge", { description: "Meetup Event with JavaScript & NodeJS Cambridge in January 2024.", url: "https://www.greeneking.co.uk/pubs/cambridgeshire/grain-and-hop-store" }],
[52.218857,  0.114595, "Chesterton Mill Cambridge", { description: "Meetup Event with JavaScript & NodeJS Cambridge in November 2023.", url: "https://www.chestertonmill.com" }],
[52.239520, 0.278297, "Black Horse Inn Swaffham Bulbeck", { description: "Meetup Event on Valentines Dinner Date Ages 40+ in February 2014.", url: "https://blackhorseinnswaffham.co.uk" }],
[53.347690, -2.880654, "Crowne Plaza Liverpool John Lennon Airport", { description: "National Conference with IQPS on Come Fly with Us in October 2002.", url: "https://www.ihg.com/crowneplaza/hotels/gb/en/liverpool/lplcp/hoteldetail" }]

];

for (let i = 0; i < buildingLocations.length; i++) {
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
    buildingArticleText += `<p class="text-center" id="building"><a href="${url}" target="_blank" title="View Website for ${title}">View Building Website</a></p>`;

    // Add Latitude, Longitude, Title and Text to buildingCoords array
    buildingCoords.push([latitude, longitude, title, buildingArticleText]);

}

// Plot the Buildings

for (let i = 0; i < buildingCoords.length; i++) {
    let arr = buildingCoords[i];
    let title = arr[2];
    let description = arr[3];
    let marker = L.marker(new L.LatLng(arr[0], arr[1]), { icon: buildingIcon, title: title });
    marker.bindPopup(description);
    buildingMarkers.addLayer(marker);
}

map.addLayer(buildingMarkers);
