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
  addRuta(ruta){
    if(!Meteor.userId()){
      throw new Meteor.Error('No esta autorizado');
    }
      Rutas.insert({
        text: ruta,
        longitud: 5,
        latitud:10,
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
    }

});
