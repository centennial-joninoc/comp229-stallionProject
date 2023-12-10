const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    // process.env.MONGODB_URI ||
    // "mongodb+srv://igoy229:229comp229@samplecluster.iqcgvyq.mongodb.net/mernproject?retryWrites=true&w=majority/" ||
    // "mongodb+srv://Blessing:qzzJjISAcwfPklIo@cluster0.txlxgvp.mongodb.net/Skeleton?retryWrites=true&w=majority" ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "0.0.0.0") +
      ":" +
      (process.env.MONGO_PORT || "4175") +
      "/mernproject",
};
export default config;
