function initMap() {

    var map = new google.maps.Map(document.getElementById("map"), {

        zoom: 3,

        center: {

            lat: 46.619261,

            lng: -33.134766

        }

    });



    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    /*
    Label A is Cambridge Science Park
    Label B is University of Leicester,
    Label C is Best Western Hotel Acocks Green (Birmingham)
    Label D is IoD Pall Mall London
    Label E is Copthorne Hotel Merry Hill Dudley
    Label F is Hotel Novotel London West (Hammersmith)
    Label G is Copthorne Tara Hotel London Kensington
    Label H is De Morgan House (Conference Centre) in Russell Square, London
    Label I is Raspberry PI Foundation Cambridge
    Label J is Hot Numbers Cambridge
    Label K is Cambridge Brew House
    Label L is The Maypole Cambridge
    Label M is The Brook Cambridge
    Label N is Grain and Hop Store Cambridge
    Label O is Chesterton Mill Cambridge
    */

    var locations = [{

        lat: 52.2320998,

        lng: 0.1415806

    }, {

        lat: 52.6211393,

        lng: -1.1246325

    }, {

        lat: 52.4455676,

        lng: -1.8271322

    }, {

        lat: 51.5071851,

        lng: -0.1316683


    }, {

        lat: 52.4850317,

        lng: -2.1150972

    }, {

        lat: 51.4920396,

        lng: -0.2198412

    }, {

        lat: 51.4985245,

        lng: -0.1908758


    }, {

        lat: 51.521232,

        lng: -0.124308

    },

    {
        lat: 52.1966209,
        lng: 0.1307118
    },

    {
        lat: 52.2000961,
        lng: 0.1384987
    },
    {
        lat: 52.20744,
        lng: 0.122225
    }, {
        lat: 52.2096674,
        lng: 0.1192446
    }, {
        lat: 52.1961124,
        lng: 0.155374
    }, {
        lat: 52.2188359,
        lng: 0.1139751
    }, {
        lat: 52.2006212,
        lng: 0.126302
    }];

    var markers = locations.map(function (location, i) {

        return new google.maps.Marker({

            position: location,

            label: labels[i % labels.length]

        });

    });



    var markerCluster = new MarkerClusterer(map, markers, {

        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'

    });

}

// Set Up Map

const streets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let map = L.map('map', {layers: [streets]}).fitWorld();

const basemaps = {"Streets": streets};
const buildingMarkers = L.markerClusterGroup();
const overlays = {"Buildings": buildingMarkers};
const layerControl = L.control.layers(basemaps, overlays).addTo(map);

function onLocationFound(e) {
    const latitude = e.latlng['lat'];
    const longitude = e.latlng['lng'];
    map.panTo(latitude, longitude);
}

map.on('locationfound', onLocationFound);
map.locate({setView: true, maxZoom: 6});

const buildingIcon = L.extraMarkers.icon({
    prefix: 'fa',
    icon: 'fa-building',
    iconColor: 'white',
    svg: true,
    markerColor: '#970043',
    shape: 'square'
});

