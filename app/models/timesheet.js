const Model = require("make-it-easy").model;

class Timesheet extends Model{
    static properties = {
        user: {required: true},
        date: {required: true},
        timesheet: {}
    }
};

module.exports = Timesheet;