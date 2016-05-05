/**
 * Created by echungath on 4/11/2016.
 */

angular.module('MyApp', [])
    .filter('reverse',[function(){
        return function(string){
            return string.split('').reverse().join('');
        }
    }]);
 