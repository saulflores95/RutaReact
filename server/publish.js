Resolutions = new Mongo.Collection("resolutions");
Rutas = new Mongo.Collection("rutas");

Meteor.publish("allResolutions", function(){
  return Resolutions.find();
});

Meteor.publish("userResolutions", function(){
  return Resolutions.find({user: this.userId});
});

Meteor.publish("allRutas", function(){
  return Rutas.find();
});

Meteor.publish("userRutas", function(){
  return Rutas.find({user: this.userId});
});

Meteor.publish("userStatus", function() {
  if (this.UserId) { // check if there is a logged in user
    return Meteor.find({ "status.online": true })
  } else { return [] }
});
