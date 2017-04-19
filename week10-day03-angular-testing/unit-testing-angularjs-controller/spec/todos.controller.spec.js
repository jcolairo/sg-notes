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
    it('Should initialise lsit correctly', () => {
      expect(controllerToTest.list).toEqual([]);
    });
    it('Should initialise inputText correctly', () => {
      expect(controllerToTest.inputText).toEqual('');
    });
  });
});
