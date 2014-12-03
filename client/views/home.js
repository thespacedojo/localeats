Template.home.rendered = function() {
  Tracker.autorun(function() {
    if (Session.get('location')) {
      latitude = Session.get('location').coords.latitude;
      longitude = Session.get('location').coords.longitude;
      var map = L.map('map').setView([latitude, longitude], 13);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      L.marker([latitude, longitude]).addTo(map)
          .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
          .openPopup();
    }
  })
}
