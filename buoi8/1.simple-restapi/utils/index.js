function getProductsFromDataJSON() {
  const fs = require("fs");
  const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
  const dataObj = JSON.parse(data);
  return dataObj;
}

module.exports = { getProductsFromDataJSON };
