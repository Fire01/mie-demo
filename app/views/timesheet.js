const View = require("make-it-easy").view;
const timesheet = require("../forms/timesheet");
const Timesheet = require("../models/timesheet");

module.exports = new View(Timesheet, {
    name: 'view_timesheet',
    path: '/timesheets',
    form: timesheet,
    acl: '@',
    readers: (user, doc) => user._id === doc.user._id || user.roles.indexOf('Admin') !== -1,
    column: [
        {data: 'user', render: (val) => val.name},
        {data: 'date', type: 'date', title: 'Created'},
    ],
});