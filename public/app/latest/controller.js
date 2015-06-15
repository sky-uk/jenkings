var component = angular.module('latest.controller', ['jobs']);

component.controller("LatestController", ['$scope', 'JobService', function ($scope, JobService) {
    console.log('loaded LatestController');

    JobService.listAllJobs().then(function (data) {
        $scope.jobruns = data.slice(0, 20);
    });

    socket.on('jenkings:new-job', function (data) {

        console.log('new job received', data.jobName, data.buildId);

        $scope.$apply(function () {
            $scope.jobruns.push(data);
            $scope.jobruns = $scope.jobruns.slice(1, 21);
        });
    });

}]);
