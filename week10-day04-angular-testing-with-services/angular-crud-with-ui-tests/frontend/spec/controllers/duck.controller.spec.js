describe('DuckController', () => {
  let controllerToTest;
  let httpBackend;
  let mock$State;
  let mock$StateParams;
  let testDuckId;

  beforeEach(() => {
    module('DuckApp');
    inject(($controller, $httpBackend) => {
      // creating an instance using the controllerToTest
      httpBackend = $httpBackend;
      $httpBackend
        .when('GET', 'http://localhost:3000/ducks')
        .respond([{ message: '200 OK' }]);
      mock$State = {
        go: jasmine.createSpy()
      };
      mock$StateParams = {
        duckId: testDuckId
      };
      controllerToTest = $controller('DuckController', {
        $stateParams: mock$StateParams,
        $state: mock$State
      });
    });
  });

  describe('initialisation', () => {
    it('Should do a basic test', () => {
      console.log('got inside the basic test');
      httpBackend.flush();
      console.log('in test: allDucks:', controllerToTest.allDucks);
    });
  });
});
