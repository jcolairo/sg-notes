describe('DuckController', () => {
  let controllerToTest;
  let httpBackend;
  let mock$State;
  let mock$StateParams;
  let testDuckId;
  let API_URL;

  beforeEach(() => {
    module('DuckApp');
    inject(($controller, $httpBackend, _API_URL_) => {
      API_URL = _API_URL_;
      httpBackend = $httpBackend;
      mock$State = {
        go: jasmine.createSpy()
      };
      mock$StateParams = {
        duckId: testDuckId
      };
      // creating an instance using the controllerToTest
      controllerToTest = $controller('DuckController', {
        $stateParams: mock$StateParams,
        $state: mock$State
      });
    });
  });

  describe('initialisation', () => {
    xit('Should do a basic test', () => {
      console.log('got inside the basic test');
      httpBackend.flush();
      console.log('in test: allDucks:', controllerToTest.allDucks);
    });
    it('Should populate allDucks with correct data', () => {
      const testDucks = ['duck one', 'duck two'];
      
      httpBackend
        .expect('GET', `${API_URL}/ducks`)
        .respond(testDucks);
      httpBackend.flush();
      expect(controllerToTest.allDucks).toEqual(testDucks);
      console.log('controllerToTest.allDucks:', controllerToTest.allDucks);
    });
  });
});
