var _ = require("lodash");

var worker = function(array){
  var average = (findSum(array)/ array.length);

  var overperform = _.filter(array, function(person){
    return person.income > average});

  var underperform = _.filter(array, function(person){
    return person.income <= average});

  return {'average': average, 'underperform': _.sortBy(underperform, 'income'), 'overperform': _.sortBy(overperform, 'income')}
};

function findSum(array){
  var incomeSum = 0;

  _.forEach(array, function(person){
    incomeSum += person.income
   })
   return incomeSum
}

module.exports = worker
