var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");


// INDEX and CREATE ROUTES
router.route("/")
.get(helpers.getTodos)
.post(helpers.createTodos)


// SHOW. UPDATE AND DELETE ROUTES
router.route("/:todoid")
.get(helpers.showTodos)
.put(helpers.updateTodos)
.delete(helpers.deleteTodos)


module.exports = router;