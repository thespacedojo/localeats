success = function(position) {
  Session.set('location', position);
  Meteor.call('fetchNearbyLocations', position.coords)
}

Meteor.startup(function () {
  // The correct way
  navigator.geolocation.getCurrentPosition(success);
});
