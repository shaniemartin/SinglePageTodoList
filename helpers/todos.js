var db = require("../models");


// INDEX ROUTE
exports.getTodos = function(req, res) {
    db.Todo.find()
        .then(function (todos) {
            res.json(todos);
        })
        .catch(function (err) {
            res.send(err);
        })
};



// CREATE ROUTE
exports.createTodos = function(req, res) {
    db.Todo.create(req.body)
        .then(function (newTodo) {
            res.status(201).json(newTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
};



// SHOW ROUTE
exports.showTodos = function(req, res) {
    db.Todo.findById(req.params.todoid)
        .then(function (foundTodo) {
            res.json(foundTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
};


// UPDATE ROUTE
exports.updateTodos = function(req, res) {
    db.Todo.findOneAndUpdate({ _id: req.params.todoid }, req.body, { new: true })
        .then(function (todo) {
            res.json(todo);
        })
        .catch(function (err) {
            res.send(err);
        })
};



exports.deleteTodos = function(req, res) {
    db.Todo.remove({ _id: req.params.todoid })
        .then(function () {
            res.json({ message: "We deleted it" })
        })
        .catch(function (err) {
            res.send(err);
        })

};




module.exports = exports;