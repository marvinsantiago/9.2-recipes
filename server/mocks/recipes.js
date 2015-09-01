module.exports = function(app) {
  var express = require('express');
  var recipesRouter = express.Router();

  recipesRouter.get('/', function(req, res) {
    res.send({
      'recipes': [
        {
          id: 1,
          name: 'shrimp and noodles',
          servings: 8,
          ingredients: [{
            amount: '2 pound',
            name: 'frozen shrimp',
          },
          {
            amount: '2 tbsp',
            name: 'grated fresh gingerroot'
          },
          ]
        }
      ]
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
