var map = L.map('map').setView([53.47670, -2.23606], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([53.47670, -2.23606]).addTo(map);
marker.bindPopup("Alan Turing Memorial").openPopup();