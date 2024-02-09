const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = `mongodb+srv://rsuravi447:PtCLVT7Q0Xuk3khG@cluster1.wgel2hb.mongodb.net/Disaster?retryWrites=true&w=majority`;
 mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected!!!"))
  .catch((error) => {
    console.log(error);
  });