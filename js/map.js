let map = L.map('map').setView([51.3977444, 4.4514129], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 12
}).addTo(map);
L.marker([51.3977444, 4.4514129]).addTo(map);