const Model = require("make-it-easy").model;

class Test extends Model{
    static properties = {
        name: {},
        description: {},
        computed: {},
        date: {},
        time: {},
        select: {},
        select_multiple: {},
        radio: {},
        checkbox: {},
        toggle: {}
    }
};

module.exports = Test;