const JokeController = require("../controllers/joke.controller");

module.exports = app => {
    app.get('/api/jokes', JokeController.index);
    app.post('/api/jokes', JokeController.create);
    app.get('/api/jokes/:id', JokeController.show);
}