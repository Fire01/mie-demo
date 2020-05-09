const Form = require("make-it-easy").form;
const group = require("../models/group");
const User = require("../models/user");

module.exports = new Form(group, {
    name: 'form_group',
    path: '/group',
    acl: '@',
    items: {
        name: {},
        description: {type: 'textarea'},
        member: {type: 'model', model: User, display: 'name'},
        members: {type: 'model', multiple: true, model: User, display: 'name'}
    }
});