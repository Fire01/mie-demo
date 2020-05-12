const View = require("make-it-easy").view;
const timesheet = require("../forms/timesheet");
const Timesheet = require("../models/timesheet");

module.exports = new View(Timesheet, {
    name: 'view_timesheet',
    path: '/timesheets',
    form: timesheet,
    acl: '@',
    readers: (args) => args.userAccess._id === args.doc.user._id || args.hasRoles('Admin'),
    column: [
        {data: 'user', render: (args) => args.value.name},
        {data: 'date', type: 'date', title: 'Created'},
    ],
});