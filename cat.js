const fs = require("fs");

module.exports = (func, fileName) => {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      func(err);
    } else {
      func(data.toString())
    }
  });
};
