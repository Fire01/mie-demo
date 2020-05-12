const Model = require("make-it-easy").model;

class Group extends Model{};

Group.properties = {
    name: {unique: true, required: true},
    description: {},
    member: {},
    members: {},
}

module.exports = Group;