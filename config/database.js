module.exports = ({ env }) => ({
  defaultConnection: "mongoose",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: "localhost",
        port: "5432",
        database: "postgres",
        username: "postgres",
        password: "admin",
        ssl: false,
      },
    },
    firestore: {
      connector: "firestore",
      settings: {
        projectId: "trading-waypoint",
        keyFilename: "trading-waypoint-firebase-adminsdk-ovurh-babbce0abb.json",
      },
      options: {
        useEmulator: true,
        allowNonNativeQueries: true,
      },
    },
    mongoose: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        // host: "charsi.rlnkxyj.mongodb.net",
        // database: "charsi",
        // username: "dragon99steel",
        // password: "5LptCrt5ZESKGkcI",
        host: "localhost",
        port: "27017",
        database: "charsi",
      },
      options: {},
    },
  },
});
