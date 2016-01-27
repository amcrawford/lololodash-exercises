var _ = require("lodash");

var worker = function (data){
  return _.template('Hello <%= name %> (logins: <%= loginCount %>)')({name: data.name, loginCount: data.login.length})
};

module.exports = worker
