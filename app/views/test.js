const View = require("make-it-easy").view;
const Test = require("../models/test");
const test = require("../forms/test");

module.exports = new View(Test, {
    name: 'test_view',
    path: '/test_view',
    form: test,
    column: [
        {data: 'name'},
        {data: 'description'},
    ],
});