'use strict';

describe('Controller: CustCtrl', function () {

  // load the controller's module
  beforeEach(module('lmsApp'));

  var CustCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustCtrl = $controller('CustCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
