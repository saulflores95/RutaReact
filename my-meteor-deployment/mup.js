module.exports = {
  servers: {
    one: {
      host: '45.55.0.220',
      username: 'root',
      // pem:
      password: 'poloboy1',
      // or leave blank for authenticate from ssh-agent
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
      ROOT_URL: 'http://45.55.0.220/',
      MONGO_URL: 'mongodb://rutaTJ:shadow1poloboy1@ds035826.mlab.com:35826/rutatj',
      PORT:3000,
    },

    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
