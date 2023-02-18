const mongoose = require("mongoose");

// const MONGO_URI = "mongodb+srv://Akash:abcdefg@akash.cuwbf1d.mongodb.net/test"

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .set("strictQuery", false)
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
