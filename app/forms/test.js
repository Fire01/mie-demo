const Form = require("make-it-easy").form;
const Test = require("../models/test");

module.exports = new Form(Test, {
    name: 'test-form',
    path: '/test-form',
    items: {
        name: {required: true},
        description: {type: 'textarea'},
        computed: {type: 'computed', value: 'Truth never change'},
        date: {type: 'date'},
        time: {type: 'time'},
        select: {type: 'select', options: ["A", "B", "C", "D"]},
        select_multiple: {type: 'select', options: ["A", "B", "C", "D"], multiple: true},
        radio: {type: 'radio', options: ["Apples", "Oranges", "Pears", "Grapefruit"], required: true},
        checkbox: {type: 'checkbox', innerLabel: 'Yes'},
        toggle: {type: 'toggle', innerLabel: 'Oke'}
    }
});