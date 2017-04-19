describe('TodosController', () => {
  let controllerToTest;

  beforeEach(() => {
    module('todosApp');
    inject(($controller) => {
      // creating an instance using the controllerToTest
      controllerToTest = $controller('TodosController');
    });
  });

  describe('initialisation', () => {
    it('Should set inputText correctly', () => {
      expect(controllerToTest.inputText).toEqual('');
    });
  });
});
