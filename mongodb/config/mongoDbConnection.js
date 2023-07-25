const { collection } = require("mongodb");

const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "myblog";

let _db = null;

async function connectDb() {
  if (!_db) {
    try {
      const client = MongoClient(url, { useUnifiedTopology: true });
      await client.connect();
      _db = await client.db(dbName);
    } catch (error) {
      throw "error";
    }
  }
  return _db;
}

exports.getCollection = (collection) => {
  let _col = null;
  return async () => {
    if (!_col) {
      try {
        const db = await connectDb();
        _col = await db.collection(collection);
      } catch (error) {
        throw "error";
      }
    }
    return _col;
  };
};
