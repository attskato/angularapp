var app = angular.module('app', ['ngResource','ngRoute']).config(['$locationProvider', function($locationProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

}]);

app.controller('MainCtrl', function($scope, $resource, $window, $location, $route, $rootScope) {
  var idParam = $location.search().id;
  if (idParam) {
    var Project = $resource('./api.php?id=' +  idParam, {id: '@id'});
    $scope.projects = Project.query();
  } else {
    var Project = $resource('./api.php:id', {id: '@id'});
    $scope.projects = Project.query();
  }

  $scope.titleClick = function(id) {
    $scope.id = id;
    $location.path('/').search({'id': id});
    var Project = $resource('./api.php?id=' +  id, {id: '@id'});
    $scope.projects = Project.query();
  }

  $scope.homeClick = function(){
    $location.path('').search({'key': null});
    var Project = $resource('./api.php');
    $scope.projects = Project.query();
  }
});

//reload when history back or go
window.onpopstate = function() {
  location.reload();
}




