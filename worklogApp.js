var app = angular.module('app', ['ngRoute', 'ngResource']);


app.factory('WorklogService', ['$resource', ($resource) => {
    return $resource('/worklogs/worklogs.json/:id', null, {
        'update': {method: 'PUT'}
    });
}]);

// Helper Functions Service
app.factory('HelperFunctions', function ($location) {
    return {
        changeView: function(view) {
            $location.path(view);
        },
        refresh: function() {
            $scope.users = WorklogService.query();
            $scope.user = "";
        }
    };
});

app.factory('TimeEntries', function () {
        return  [
            { project: 'Online Banking App', task: 'update login page', hours: [0, 0, 0, 0, 0, 0, 0] },
            // { project: 'Online Banking App', task: 'implement login authentication', hours: [5.5, 1, 0, 0, 0]},
            // { project: 'Android Rest API', task: 'refactor back end', hours: [1.5, 1, 4, 1, 8]},
            // { project: 'Medicade System', task: 'Database design', hours: [0, 1, 8, 8, 0]},
        ];
    })
  app.factory('Projects', function () {
        return [
            { name: 'Online Banking App', tasks: ['update login page', 'implement login authentication'] },
            { name: 'Android Rest API', tasks: ['refactor back end'] },
            { name: 'Medicade System', tasks: ['Database design'] },
        ];
    })
  app.controller('TimeEntriesController', ['$scope', 'Projects', 'TimeEntries', function ($scope, Projects, TimeEntries) {
        $scope.entries = TimeEntries;
        $scope.projects = Projects;
        $scope.showWeekend = false;

        $scope.addEntry = function () {
            console.log("add");
            $scope.entries.push({ project: 'select project', task: 'select task', hours: [0, 0, 0, 0, 0, 0, 0]});
        }
    }]);
