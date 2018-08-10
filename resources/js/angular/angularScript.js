var application = angular.module("OmnifoodApp", []);

application.controller("angular--span-controller", ["$scope", function($scope){

    $scope.message = "We will send you our latest updates!";
    $scope.toggleMessage = function($event){
        if(event.target.checked){
            $scope.message = "We will send you our latest updates!";
        }else{
            $scope.message = "You sure? Knowledge is a great power!";
        }
    }

}]);
