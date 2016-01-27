var _ = require("lodash");

var worker = function chaining(words){
  return _.chain(words)
    .sortBy()
    .map(function(word){
      return _.toUpper(word) + 'CHAINED'
    }
  );
};

module.exports = worker
