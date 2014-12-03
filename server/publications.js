Meteor.publish('nearbyPlaces', function(coords) {
  Places.find({'loc.coordinates': {$near: {$geometry: {type: "Point", coordinates: [coords.latitude,coords.longitude]}}}})
});
