var _ = require("lodash");

var worker = function(hash_object){
  return _.forEach(hash_object, function(item){
    if (item.population > 1){
      item['size'] = 'big';
    } else if (item.population > 0.5 && item.population < 1){
      item['size'] = 'med';
    } else {
      item['size'] = 'small';
    }
  });
};

module.exports = worker
