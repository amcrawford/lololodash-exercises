var _ = require("lodash");

var worker = function reduces(articles){
  var groupedArticles = _.groupBy(articles, 'article');
  var answer = [];

  _.forEach(groupedArticles, function(dataSet, article){
    if (dataSet.length === 1){
      answer.push({article: parseInt(article), total_orders: dataSet[0].quantity})
    } else {
      var quantity = _.reduce(dataSet, function(sum, dataSet){
        return sum + dataSet.quantity
      }, 0)
      answer.push({article: parseInt(article), total_orders: quantity})
    };
  })
  return answer.reverse();
};

module.exports = worker
