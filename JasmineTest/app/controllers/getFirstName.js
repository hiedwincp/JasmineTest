/**
 * Created by echungath on 4/11/2016.
 */

angular.module('MyApp1', [])
    
    .controller('GetFirstNameCtrl', function ($scope) {
        
        $scope.getFirstName = function () {
        
            return $scope.name.split(' ')[0];
        }

        $scope.getSecondName = function () {

            return $scope.name.split(' ')[1];
        }
    });