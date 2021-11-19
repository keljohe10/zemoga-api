require("dotenv").config();
const app = require("./src/app");
const {
  NODE_ENV = "development",
  PORT = 3005,
  USER_MONGO,
  PASSWORD_MONGO,
} = process.env;
const mongoose = require("mongoose");

async function StartServer() {
  mongoose.connection.openUri(
    `mongodb+srv://${USER_MONGO}:${PASSWORD_MONGO}@cluster0.patpy.mongodb.net/nodeplatzi?retryWrites=true&w=majority`,
    (err, res) => {
      if (err) throw err;
      console.log("DB \x1b[34m%s\x1b[0m", "Online!!");
    }
  );

  app.listen(PORT, () => {
    console.log(
      `CORE API: Listening on port ${PORT} running ${NODE_ENV} environment`
    );
  });
}

StartServer();
