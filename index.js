"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var link = axios_1["default"].get('https://jsonplaceholder.typicode.com/todos/1').then(function (res) {
    var link = res.data;
    var id = link.id;
    var title = link.title;
    var completed = link.completed;
    funTodo(id, title, completed);
});
var funTodo = function (id, title, completed) {
    console.log("\n      todos id: " + id + "\n      todos title: " + title + "\n      todos completed: " + completed + "\n   ");
};
