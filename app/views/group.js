const View = require("make-it-easy").view;
const Group = require("../models/group");
const FormGroup = require("../forms/group");

module.exports = new View(Group, {
    name: 'view_groups',
    path: '/groups',
    form: FormGroup,
    acl: '@',
    column: [
        {data: 'name'},
        {data: 'description'},
        {data: 'member', render: (val, data) => val ? val.name : ''},
        {data: 'members', render: (val, data) => val ? val.map(el => el && el.name).join(", ") : ''},
    ]
});