 function initMap() {
 
     var map = new google.maps.Map(document.getElementById("map"), {
 
         zoom: 3,
 
         center: {
 
             lat: 46.619261,
 
             lng: -33.134766
 
         }
 
     });
 
 
 
     var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
 
    // Cambridge Science Park, University of Leicester, 
    // Best Western Hotel Acocks Green, IoD Pall Mall London
    // and Copthorne Hotel Merry Hill Dudley
 
     var locations = [{
 
         lat: 52.2357366,
 
         lng: 0.1361489
 
     }, {
 
         lat: 52.6211393, 
 
         lng: -1.1268212
 
     }, {
 
         lat: 52.4455676, 
 
         lng: -1.8271322
 
     }, {
      
         lat: 51.5072671, 
 
         lng: -0.134112
 
      
     }, {
     
        lat: 52.4850317,
        lng: -2.1172859
     
     }];
 
 
 
     var markers = locations.map(function(location, i) {
 
         return new google.maps.Marker({
 
             position: location,
 
             label: labels[i % labels.length]
 
         });
 
     });
 
 
 
     var markerCluster = new MarkerClusterer(map, markers, {
 
         imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
 
     });
 
 }