var myApp = angular.module('myApp',[
  'ngRoute'
])
myApp.config( function($routeProvider, $locationProvider)
{
  $routeProvider.when('/home', {templateUrl: '/partials/home.html', controller: 'homeController'})
  $routeProvider.otherwise({redirectTo: '/home'})

  $locationProvider.html5Mode({enabled: true, require: false})
})
