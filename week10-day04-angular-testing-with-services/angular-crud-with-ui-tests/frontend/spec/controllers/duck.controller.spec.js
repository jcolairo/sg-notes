describe('DuckController', () => {
  let controllerToTest;

  beforeEach(() => {
    module('DuckApp');
    inject(($controller) => {
      // creating an instance using the controllerToTest
      controllerToTest = $controller('DuckController');
    });
  });

  describe('initialisation', () => {
    it('Should do a basic test', () => {
      console.log('got inside the basic test');
    });
  });
});
