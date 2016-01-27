var _ = require("lodash");

var worker = function sorter(array){
  return _.sortBy(array, 'quantity').reverse();
};

module.exports = worker
