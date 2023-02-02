const map = L.map('map', {scrollWheelZoom:false}).setView([-29.50, 145], 3.5);
const basemaps = {
    StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',   {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
    Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?',   {layers: 'TOPO-WMS'}),
    Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {layers: 'OSM-Overlay-WMS'})
  };
  L.control.layers(basemaps).addTo(map);
  basemaps.Topography.addTo(map);
  const basicBeachIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/shacheeswadia/leaflet-map/main/beach-icon-chair.svg',
    iconSize: [40, 40],
  });

  const marker1 = L.marker([-37.699450, 176.279420], {icon: basicBeachIcon}).addTo(map);
const marker2 = L.marker([-27.643310, 153.305140], {icon: basicBeachIcon}).addTo(map);
const marker3 = L.marker([-33.956330, 122.150270], {icon: basicBeachIcon}).addTo(map);
const marker4 = L.marker([-34.962390, 117.391220], {icon: basicBeachIcon}).addTo(map);
const marker5 = L.marker([-17.961210, 122.214820], {icon: basicBeachIcon}).addTo(map);
const marker6 = L.marker([-16.505960, 151.751520], {icon: basicBeachIcon}).addTo(map);
const marker7 = L.marker([-22.594400, 167.484440], {icon: basicBeachIcon}).addTo(map);
const marker8 = L.marker([-37.977000, 177.057000], {icon: basicBeachIcon}).addTo(map);
const marker9 = L.marker([-41.037600, 173.017000], {icon: basicBeachIcon}).addTo(map);
const marker10 = L.marker([-37.670300, 176.212000], {icon: basicBeachIcon}).addTo(map);