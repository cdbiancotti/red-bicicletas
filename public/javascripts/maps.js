var map = L.map('main_map').setView([-34.801, -58.388], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

// L.marker([-34.801, -58.387]).addTo(mymap);
// L.marker([-34.802, -58.389]).addTo(mymap);
// L.marker([-34.803, -58.386]).addTo(mymap);

$.ajax({
  dataType: 'json',
  url: 'api/bikes',
  success: function (res) {
    console.log(res);
    res.bikes.forEach((element) => {
      L.marker(element.location, { title: element.id }).addTo(map);
    });
  },
});
