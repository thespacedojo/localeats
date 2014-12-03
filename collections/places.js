Places = new Mongo.Collection('places');

Meteor.methods({
  'fetchNearbyLocations': function(coords) {
    if (Meteor.isServer) {
      results = HTTP.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + coords.latitude + "," + coords.longitude + "&radius=500&types=food&key=AIzaSyCtfoCAldCEf8hXUlkVUd4UljqKR6W_aF4")
      _(results.data.results).each(function(loc) {
        Places.upsert({id: loc.id}, {$set: loc})
      })
    }
  }
})
