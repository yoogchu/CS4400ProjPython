angular.module('myApp').factory('UserService',
['$timeout', '$http', function ($timeout, $http) {

    var user = null;
    
    function authenticate(username, password) {
        //http://twisted.readthedocs.io/en/twisted-16.2.0/core/howto/defer-intro.html
        //See above on deffereds for async code

        //Post request to server
        return $http.post('/api/AuthenticateUser', {username: username, password: password})
        .success(function(data) {
            return data;
        })
        .error(function(data, status) {
            console.error("Authenticate User Error", status, data);
        });
    }

    return ({
        authenticate: authenticate
    });
}]);