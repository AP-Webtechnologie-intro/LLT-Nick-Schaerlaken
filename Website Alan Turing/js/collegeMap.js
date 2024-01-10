var map = L.map('map').setView([51.51149, -0.11598], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.51149, -0.11598]).addTo(map);
marker.bindPopup("King's College").openPopup();