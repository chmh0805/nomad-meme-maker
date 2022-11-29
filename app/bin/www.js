"use strict";

const app = require(__dirname + "/../../app");
const PORT = 3000;

app.listen(PORT, () => {
  console.log("server start listening on port 3000");
});
