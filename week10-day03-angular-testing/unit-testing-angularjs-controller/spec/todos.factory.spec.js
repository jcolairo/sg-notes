describe('TodosFactory', () => {
  let factoryToTest;

  beforeEach(module('todosApp'));

  beforeEach(inject((TodosFactory) => {
    factoryToTest = TodosFactory;
  }));

  describe('list', () => {
    it('Should show a list of an emply array', () => {
      expect(factoryToTest.list.length).toEqual(0);
    });
    it('Should show a list of all todos', () => {
      var arrayList = 1;
      expect(arrayList).toBeGreaterThan(factoryToTest.list.length);
    });
  });

  describe('add()', () => {
    it('Should add a new todo to the todo list', () => {
      const newTodoItem = 'a new todo';
      factoryToTest.add(newTodoItem);
      expect(factoryToTest.list[factoryToTest.list.length -1]).toEqual(newTodoItem);
    });
    it('Should add a new todo item to an empty todo list', () => {
      const newTodoItem = 'another new todo';
      factoryToTest.add(newTodoItem);
      var arrayList = 0;
      expect(factoryToTest.list[arrayList]).toEqual(newTodoItem);
    });
    it('Should be at least 3 characters long', () => {
      const newTodoItem = 'abc';
      factoryToTest.add(newTodoItem);
      expect(factoryToTest.list[factoryToTest.string[newTodoItem]]).toBeGreaterThan(3);
    });
  });

  describe('clear()', () => {
    it('Should clear the todo list', () => {
      factoryToTest.list.push('a new todo 1', 'another todo');
      factoryToTest.clear();
      expect(factoryToTest.list.length).toEqual(0);
    });
  });
});
