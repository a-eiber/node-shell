const fs = require("fs");

module.exports = (func) => {
  fs.readdir("./", (err, files) => {
    if (err) {
      func(err);
    } else {
      func(files.join("\n"));
    }
  });
};
