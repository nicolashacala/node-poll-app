const mongoose = require('mongoose');

//Map global promises
mongoose.Promise = global.Promise
//Mongoose connect
mongoose.connect('mongodb://localhost/pusherpoll')
.then(() => console.log('Mongodb connected'))
.catch(err => console.log(err));