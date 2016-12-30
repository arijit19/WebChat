var myApp = angular.module('myApp',[
  'ngRoute',
  'ui.bootstrap',
  'ui.bootstrap.tpls'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
{
  $routeProvider.when('/home', {templateUrl: '/static/partials/home.html', controller: 'homeController'})
  $routeProvider.when('/about', {templateUrl: '/static/partials/about.html', controller: 'aboutController'})
  $routeProvider.when('/contact', {templateUrl: '/static/partials/contact.html', controller: 'contactController'})
  $routeProvider.when('/projects', {templateUrl: '/static/partials/projects.html', controller: 'projectsController'})


  // when anyone naviates to /project/:project load the partial of the :project.html
  $routeProvider.when('/projects/:projects',
{
  templateUrl: function(params)
  {
    return 'static/partials/projects/customerapi.html'
    console.log("params.project :===>>>>" + params.projects);
  },
  controller: 'customerApiController'
})

  $routeProvider.otherwise({redirectTo: '/home'})

  $locationProvider.html5Mode({enabled: true})
}])
