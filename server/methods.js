Meteor.methods({
  addRuta(ruta, longitud, latitud, url){
    if(!Meteor.userId()){
      throw new Meteor.Error('No esta autorizado');
    }
      Rutas.insert({
        text: ruta,
        longitud: longitud,
        latitud: latitud,
        url: url,
        complete: false,
        createdAt: new Date(),
        user: Meteor.userId()
      });
  },
  toggleRuta(ruta){
      check(ruta, Object);

      if(Meteor.userId() !== ruta.user){
        throw new Meteor.Error('Incorrect user');
      }
      Rutas.update(ruta._id, {
        $set: {complete: !ruta.complete}
      });
    },
  deleteRuta(ruta){
      check(ruta, Object);
      if(Meteor.userId() !== ruta.user){
        throw new Meteor.Error('Incorrect user');
      }
      Rutas.remove(ruta._id);
    },
  updateUser(user, lat, lng) {
    console.log("Update Method Initlized");
    console.log("***********************");
      if(Meteor.userId() == user._id){
        console.log(user);
        console.log(lat);
        console.log(lng);
        lat = parseFloat(lat);
        lng = parseFloat(lng);
        Meteor.users.update(user._id, {
          $set: {
            longitude: lng,
            latitude: lat
          }
        });
      }
    }

});
