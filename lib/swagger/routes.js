var express = require('express')
, path = require('path');

var swaggerRoutes = function(app, options) {
  app.use('/', express.static(process.cwd() + options.statics));

  app.get('/api-docs.json', function (req, res, next) {
    var models = require(path.join(process.cwd(), options.resources) + 'index.json');
    //models.basePath = '';
    res.json(200, models);
  });

  app.get('/api-docs.json/:resource', function (req, res, next) {
    var models = require(path.join(process.cwd(), options.resources) + req.params.resource + '.json');
    models.basePath = options.applicationUrl;
    res.json(200, models);
  });

};

module.exports = swaggerRoutes;