Meteor.methods({
  addResolution(resolution){
    check(resolution, String);
      if(!Meteor.userId()){
        throw new Meteor.Error('No esta autorizado');
      }
        Resolutions.insert({
          text: resolution,
          complete: false,
          createdAt: new Date(),
          user: Meteor.userId()
        });
    },
  toggleResolution(resolution){
      check(resolution, Object);

      if(Meteor.userId() !== resolution.user){
        throw new Meteor.Error('Incorrect user');
      }
      Resolutions.update(resolution._id, {
        $set: {complete: !resolution.complete}
      });
    },
  deleteResolution(resolution){
      check(resolution, Object);
      if(Meteor.userId() !== resolution.user){
        throw new Meteor.Error('Incorrect user');
      }
      Resolutions.remove(resolution._id);
    },

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
        Meteor.users.update(user._id, {
          $set: {
            longitude: lng,
            latitude: lat
          }
        });
      }
    }

});
