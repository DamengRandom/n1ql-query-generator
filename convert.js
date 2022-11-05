// This script can only be suitable for the data records which is less than
2000;
const fs = require("fs");

function convert(collectionName, sourceFile, query, resultFile) {
  fs.readFile(sourceFile, "utf8", (err, data) => {
    if (err) {
      console.log("Source file read failed:", err);
      return;
    }

    const json = JSON.parse(data);

    const response = json.reduce((acc, cur, index) => {
      const key = cur[collectionName].id.toString();
      const value = cur[collectionName];
      const valueString = JSON.stringify(value);

      cur = ('("' + key + '", ' + valueString + ")").replace(/\\/g, "");

      comma = index === json.length - 1 ? "" : ", ";

      acc += cur + comma;

      return acc;
    }, "");

    if (response) {
      const final = `${query} ${response}`;
      fs.writeFile(resultFile, final, function (err) {
        if (err) return console.log(err);
        console.log(`Generated data have been saved into ${resultFile}`);
      });
    }
  });
}

// start converting by fill in the details of sourceFile, query and resultFile

// Example for bucket-name > scope-name > collection-name

// convert(
//   "nested-object-name", // can be optional, depends on how your object looks like
//   "./source-file-name.json",
//   "INSERT INTO `bucket-name`.`scope-name`.`collection-name`(KEY, VALUE) VALUES ",
//   "generated-query.txt"
// );
