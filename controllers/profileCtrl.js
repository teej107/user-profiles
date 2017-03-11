/**
 * Created by tanner on 3/11/17.
 */
var profiles = [
    {
        name: 'Preston McNeil',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
        status: 'Everything is bigger in Texas'
    },
    {
        name: 'Ryan Rasmussen',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
        status: 'RR Rules'
    },
    {
        name: 'Terri Ruff',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
        status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
    },
    {
        name: 'Lindsey Mayer',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
        status: 'OMG MITTENS DID THE CUTEST THING TODAY'
    }
];

module.exports = {
    getFriendsProfiles: function (req, res)
    {
        if (req.session.currentUser)
        {
            var friendsArr = [];
            req.session.currentUser.friends.forEach(function (friend)
            {
                profiles.some(function (profile)
                {
                    if (profile.name === friend)
                    {
                        friendsArr.push(profile);
                        return true;
                    }
                    return false;
                });
            });

            res.send({
                currentUser: req.session.currentUser,
                friends: friendsArr
            });
        }
        else
        {
            res.send({error: 'not logged in'});
        }
    }
};