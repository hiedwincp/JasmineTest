/**
 * Created by echungath on 4/11/2016.
 */

'use strict';

describe('MyApp1', function(){ //describe your object type

    beforeEach(module('MyApp1')); //load module

    // beforeEach(module('GetFirstNameCtrl')); //load module

    var scope, GetFirstNameCtrl ;

    //initialize your $controller and a mock scope
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        GetFirstNameCtrl = $controller('GetFirstNameCtrl' , {
            $scope: scope
        });
    }));


    describe('getFirstNameCtrl',function(){ //describe your app name


        // it('Should return total amount', function(){  //write tests  - testing variable
        //     expect(scope.total).toBe(17); //pass
        // });

        it('Should return only first name', function(){  //write tests - testing function
            scope.name = 'Edwin Paul Chungath';
            expect(scope.getFirstName()).toBe('Edwin');

            scope.name = 'Dough Chyan';
            expect(scope.getFirstName()).toBe('Dough');
            // expect(scope.getFirstName()).toBe('Dough1'); // Not pass

            scope.name = '123 4546';
            expect(scope.getFirstName()).not.toBe(null);
            expect(scope.getFirstName()).toBe('123');

        });

        it('Should return empty when first name not there', function(){  //write tests - testing function

            scope.name = ' Chyan';
            expect(scope.getFirstName()).not.toBe('Chyan');
            expect(scope.getFirstName()).toBe('');

            scope.name = '';
            expect(scope.getFirstName()).toBe('');

        });
    });

});
