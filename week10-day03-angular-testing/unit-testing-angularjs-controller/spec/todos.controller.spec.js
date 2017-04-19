describe('TodosController', () => {
  let controllerToTest;
  let MockTodosFactory;

  beforeEach(() => {
    module('todosApp');
    MockTodosFactory = {
      list: [],
      add: jasmine.createSpy(),
      clear: jasmine.createSpy()
    };
    inject(($controller) => {
      // creating an instance using the controllerToTest
      controllerToTest = $controller('TodosController', { TodosFactory: MockTodosFactory });
    });
  });

  describe('initialisation', () => {
    it('Should initialise list correctly', () => {
      expect(controllerToTest.list).toEqual([]);
    });
    it('Should initialise inputText correctly', () => {
      expect(controllerToTest.inputText).toEqual('');
    });
  });

  describe('add()', () => {
    it('Should call TodosFactory.add() with correct parameter', () => {
      const inputText = 'new todo 1';

      controllerToTest.inputText = inputText;
      controllerToTest.add();
      expect(MockTodosFactory.add).toHaveBeenCalledWith(inputText);
    });
    it('Should clearn inputText', () => {
      const inputText = 'new todo 2';

      controllerToTest.inputText = inputText;
      controllerToTest.add();
      expect(controllerToTest.inputText).toEqual('');
    });
  });
});
