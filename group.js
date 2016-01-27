var _ = require("lodash");

var worker = function grouping(people){
  return _.chain(people)
  .groupBy('username')
  .map(function(comments, name){
    return {'username': name, 'comment_count': _.size(comments)};
  })
  .sortBy('comment_count').reverse();
};

module.exports = worker
