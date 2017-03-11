/**
 * Created by tanner on 3/11/17.
 */
var users = [
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];

module.exports = {
    login: function (req, res)
    {
        var name = req.body.name;
        var password = req.body.password;
        var send = { userFound: false };
        users.some(function (e)
        {
            if (name === e.name)
            {
                var passed = password === e.password;
                if (passed)
                {
                    req.session.currentUser = e;
                }
                console.log("Logging in", name);
                send.userFound = true;
                return true;
            }
            return false;
        });
        res.send(send);
    }

};