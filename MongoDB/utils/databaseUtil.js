const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const MONGO_URL =
  "mongodb+srv://jitukr169:Jitu123r%40@airbnb.gjsevzh.mongodb.net/?retryWrites=true&w=majority&appName=airbnb";
  let _db;
const MongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((client) => {
      console.log("Connected to MongoDB");
      callback();
      _db = client.db('airbnb');
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};
const getDB = () => {
  if (! _db){
    throw new Error("No database found!");
  }
  
  return _db;

}
exports.MongoConnect = MongoConnect;
exports.getDB = getDB;