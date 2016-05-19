var app = angular.module('app', ['ngResource','ngRoute']).config(['$locationProvider', function($locationProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

}]);

app.controller('MainCtrl', function($scope, $resource, $window, $location, $route) {
  var idParam = $location.search().id;
  if (idParam) {
    var Project = $resource('./api.php?id=' +  idParam, {id: '@id'});
    $scope.projects = Project.query();
  } else {
    var Project = $resource('./api.php:id', {id: '@id'});
    $scope.projects = Project.query();
  }

  $scope.click = function(id) {
    $scope.id = id;
    $location.path('/').search({'id': id});
    $route.reload();
  }

});