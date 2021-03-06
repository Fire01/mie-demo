const Form = require("make-it-easy").form;
const Timesheet = require("../models/timesheet");

module.exports = new Form(Timesheet, {
    name: 'form_timesheet',
    path: '/timesheet',
    acl: '@',
    readers: (args) => args.userAccess._id === args.doc.user._id || args.hasRoles('Admin'),
    authors: (args) => args.userAccess._id === args.doc.user._id,
    items: {
        user: {type: 'computed', value: (args) => args.value ? args.value : args.userAccess, display: (val) => val.name},
        date: {type:'date', value: () => new Date()},
        timesheet: {
            type: 'items',
            items: {
                task: {label: 'Pekerjaan', type: 'textarea'}, 
                time: {type: 'number', label: 'Total Waktu (Jam)'},
            }
        }
    }
});