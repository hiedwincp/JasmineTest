/**
 * Created by echungath on 4/13/2016.
 */

describe("hello world", function() {
    var $rootScope;
    var $controller;
    beforeEach(module("HelloApp"));
    beforeEach(inject(function($injector) {

        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
        $scope = $rootScope.$new();

    }));
    beforeEach(inject(function($controller) {
        YourControllerHere = $controller("YourControllerHere");

    }));

    it("Should say hello", function() {
        expect(YourControllerHere.message).toBe("Hello");
    });

});