require("dotenv").config();
let express = require('express');
let app = express();
let character = require('./controllers/character-controller');
let sequelize = require('./db');
let user = require('./controllers/user-controller');

sequelize.sync();
app.use(require('./middleware/headers'));
app.use(express.json());
app.use('/character', character);
app.use('/user', user);
app.listen(3000, function() {
    console.log('app is listening on port 3000')
});