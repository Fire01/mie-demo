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
        {data: 'member', render: (args) => args.value ? args.value.name : ''},
        {data: 'members', render: (args) => args.value ? args.value.map(el => el && el.name).join(", ") : ''},
    ]
});