module.exports = {
  servers: {
    one: {
      host: 'rutatj.io',
      username: 'root',
      // pem:
      password: 'poloboy1',
      // or leave blank for authenticate from ssh-agent
      //C:\Users\Saul\AppData\Roaming\npm\mup
    }
  },

  meteor: {
    name: 'rutatj',
    path: '../',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://rutatj.io',
      MONGO_URL: 'mongodb://rutaTJ:shadow1poloboy1@ds035826.mlab.com:35826/rutatj',
      PORT:3000,
    },

    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },


};
