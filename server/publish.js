Rutas = new Mongo.Collection("rutas");

Meteor.publish("allRutas", function(){
  return Rutas.find();
});

Meteor.publish("userRutas", function(){
  return Rutas.find({user: this.userId});
});

Meteor.publish("allUsers", function() {
  return Meteor.users.find();
});

Meteor.publish("onlineUsers", function(){
  return Meteor.users.find({ "status.online": true }, {fields: { latitude: 1, longitude: 1 }});
});
