const app = require('./src/app');
const { NODE_ENV = 'development', PORT = 3005 } = process.env;
const mongoose = require("mongoose");

async function StartServer() {
  mongoose.connection.openUri(
    `mongodb+srv://keljohe10:Hernandez1710@cluster0.patpy.mongodb.net/nodeplatzi?retryWrites=true&w=majority`,
    (err, res) => {
      if (err) throw err;
      console.log("DB \x1b[34m%s\x1b[0m", "Online!!");
    }
  );

  app.listen(PORT, () => {
    console.log(`CORE API: Listening on port ${PORT} running ${NODE_ENV} environment`);
  });
}

StartServer();