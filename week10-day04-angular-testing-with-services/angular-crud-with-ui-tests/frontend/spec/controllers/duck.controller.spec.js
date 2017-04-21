describe('DuckController', () => {
  let controllerToTest;
  let httpBackend;
  let mock$State;
  let mock$StateParams;
  let API_URL;
  const testDucks = ['Donald', 'Daffy'];
  const testDuckId = 'quirk';

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
      httpBackend
        .when('GET', `${API_URL}/ducks`)
        .respond(testDucks);
    });
  });

  describe('initialisation', () => {
    it('Should populate allDucks with correct data', () => {

      httpBackend
        .expect('GET', `${API_URL}/ducks`);
      httpBackend.flush();
      expect(controllerToTest.allDucks).toEqual(testDucks);
      httpBackend.verifyNoOutstandingExpectation();
      console.log('controllerToTest.allDucks:', controllerToTest.allDucks);
    });
  });

  describe('editDuck()', () => {
    it('Should go to "edit" state with specified duckId', () => {

      controllerToTest.editDuck(testDuckId);

      expect(mock$State.go).toHaveBeenCalledWith('edit', { duckId: testDuckId });
    });
  });



  describe('deleteDuck()', () => {
    fit('Should delete duck with specified duckId', () => {

      httpBackend
        .expect('DELETE', `${API_URL}/ducks/${testDuckId}`)
        .respond({});
      controllerToTest.deleteDuck(testDuckId);
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
    });
  });






//   describe('updateDuck()', () => {
//     it('Should update a duck on a specified duckId', () => {
//       const testUpdateDuck = ['duck three'];
//       // const testUpdatedDuck = ['duck four'];
//       const editedDuck = 'abc';
//       let duck;
//
//       console.log('1', testUpdateDuck);
//       controllerToTest.editDuck(duck);
//       // MockDuckFactory.editOne(duck);
//       httpBackend
//         .when('PATCH', `${API_URL}/ducks/${editedDuck}`, (testUpdateDuck) => {
//           expect(testUpdateDuck);
//         });
//       // httpBackend.flush();
//       console.log('controllerToTest.selectedDuck.duck', controllerToTest.updateDuck);
//       console.log('3', testUpdateDuck);
//     });
//   });
//
//   describe('deleteDuck()', () => {
//     it('Should delete specified duck', () => {
//
//       controllerToTest.deleteDuck(testDuckId);
//       httpBackend
//         .expect('DELETE', `${API_URL}/ducks/${testDuckId}`)
//         .respond(testDuckId);
//       httpBackend.flush();
//       expect(controllerToTest.allDucks).toEqual([]);
//     });
//   });
//
//   describe('createOne()', () => {
//     it('Should create a new duck', () => {
//       const inptutText = 'new duck';
//
//       controllerToTest.newDuck = inptutText;
//       controllerToTest.addDuck();
//       console.log(inptutText);
//       console.log('2', controllerToTest.newDuck);
//       httpBackend
//         .expect('POST', `${API_URL}/ducks`)
//         .respond;
//       // httpBackend.flush();
//       expect(MockDuckFactory.inptutText).toEqual(inptutText);
//     });
//   });
});


// expect PATCH
// 3rd param is the object that you are providing to PATCH
// response
// make sure that check that the httpBackend is called
//
// just for PATCH
// httpBackend
//   .expect
//   no response or response with {} or []
//   flush
//   expectation
