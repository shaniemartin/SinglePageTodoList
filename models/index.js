// ======================
//     MONGOOSE SETUP
// ======================
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/single_page_todos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");