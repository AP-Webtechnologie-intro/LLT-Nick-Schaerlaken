
let map = L.map('mijnmap').setView([53.46816212874386, -2.2314187536141925], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



let bounds = [[53.46816212874386, -2.2314187536141925], [53.46816212874386, -2.2314187536141925]];

L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);

let apMarker = L.marker([53.46816212874386, -2.2314187536141925]).addTo(map);
apMarker.bindPopup("<b>Alan Turing Building").openPopup();

