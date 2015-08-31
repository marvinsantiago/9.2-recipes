module.exports = function(app) {
  var express = require('express');
  var recipesRouter = express.Router();

  recipesRouter.get('/', function(req, res) {
    res.send({
      'recipes': []
    });
  });

  recipesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  recipesRouter.get('/:id', function(req, res) {
    res.send({
      'recipes': {
        id: req.params.id
      }
    });
  });

  recipesRouter.put('/:id', function(req, res) {
    res.send({
      'recipes': {
        id: req.params.id
      }
    });
  });

  recipesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/recipes', recipesRouter);
};
