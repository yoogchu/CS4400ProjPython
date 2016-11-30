var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
    //Login Partials
    .when('/', {
        templateUrl: 'static/partials/login.html',
        controller: 'loginController'
    })
    .when('/register', {
        templateUrl: 'static/partials/register.html',
        controller: 'loginController'
    })
    //Student Partials
    .when('/main', {
        templateUrl: 'static/partials/student/main.html',
        controller: 'loginController'
    })
    .when('/profile', {
        templateUrl: 'static/partials/student/profile.html',
        controller: 'loginController'
    })
    .when('/editprofile', {
        templateUrl: 'static/partials/student/editprof.html',
        controller: 'loginController'
    })
    .when('/studentapps', {
        templateUrl: 'static/partials/student/studapps.html',
        controller: 'loginController'
    })
    .when('/viewcourse', {
        templateUrl: 'static/partials/student/viewcourse.html',
        controller: 'loginController'
    })
    .when('/viewproject', {
        templateUrl: 'static/partials/student/viewproj.html',
        controller: 'loginController'
    })
    //Admin Partials
    .when('/adminapps', {
        templateUrl: 'static/partials/admin/adminapps.html',
        controller: 'loginController'
    })
    .when('/applicationreport', {
        templateUrl: 'static/partials/admin/appreport.html',
        controller: 'loginController'
    })
    .when('/projectsreport', {
        templateUrl: 'static/partials/admin/projreport.html',
        controller: 'loginController'
    })
    .when('/addproject', {
        templateUrl: 'static/partials/admin/addproj.html',
        controller: 'loginController'
    })
    .when('/addcourse', {
        templateUrl: 'static/partials/admin/addcourse.html',
        controller: 'loginController'
    })
    .otherwise({
        redirectTo: '/'
    });
})
.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('//').endSymbol('//');
}]);