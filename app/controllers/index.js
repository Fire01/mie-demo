const Controller = require('make-it-easy').controller;

module.exports = [
    new Controller({
        name: 'index',
        path: '/',
        method: 'GET',
        acl: '@',
        fn: (req, res) => {
            return res.render('_base/main', {
                homePath: '/test_view',
                user: req.session.user,
                menu: [
                    {text: "Home", icon: "home", location: "/", "target": "_self"},
                    {text: "Timesheet", icon: "tasks", route: "view_timesheet"},
                    {text: "Test", icon: "vial", route: "test_view"},
                    {text: "Administration", icon: "cog", "items": [
                        {text: "Users", icon: "user", route: "view_users"},
                        {text: "Groups", icon: "users", route: "view_groups"}
                    ]}
                ]                
            });
        }
    })
];