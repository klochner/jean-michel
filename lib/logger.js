var Logger = {};

Logger.request = function(req) {
  console.log('%s %s', req.method, req.url);
}

module.exports = Logger;
