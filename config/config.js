const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://igoy229:229comp229@samplecluster.iqcgvyq.mongodb.net/mernproject?retryWrites=true&w=majority/"
};
export default config;
