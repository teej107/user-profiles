angular.module('userProfiles')
    .service('friendService', function ($http)
    {

        var url = 'http://localhost:3000/api/';
        this.login = function (user)
        {
            return $http({
                url: url + 'login',
                method: 'POST',
                data: user
            })
        };

        this.getFriends = function ()
        {
            return $http({
                url: url + 'profiles',
                method: 'GET'
            })
        };

    });
