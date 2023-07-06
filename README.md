# Couchbase N1QL data mirror query generator

### Use case 🖼🖼

When you don't want to do data entry record by record from old database to new database (Seeking for a dynamic way to mirror the CouchBase data records) ~~

### Example 🚀🚀

```js
// Step 1: Export the data from old database

// Step 2: Download and put the json file into same folder with convert.js (same as this reposiotry shows)

// Step 3: put this peice of code at the end of convert.js file

// Should be bucket-name > scope-name > collection-name
// For this example: (bucket-one > scope-one > nav-links)
convert(
  "nav-links", // can be optional, depends on how your object looks like
  "./sample.json",
  "INSERT INTO `bucket-one`.`scope-one`.`nav-links`(KEY, VALUE) VALUES ",
  "nav-links-query.txt"
);

// Step 4: start run node convert.js to generated the query file ~~
```
