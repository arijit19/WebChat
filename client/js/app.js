var myApp = angular.module('myApp',[
  'ngRoute'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
{
  $routeProvider.when('/home', {templateUrl: '/static/partials/home.html', controller: 'homeController'})
  $routeProvider.when('/about', {templateUrl: '/static/partials/about.html', controller: 'aboutController'})
  $routeProvider.when('/contact', {templateUrl: '/static/partials/contact.html', controller: 'contactController'})
  $routeProvider.otherwise({redirectTo: '/home'})

  $locationProvider.html5Mode({enabled: true})
}])
