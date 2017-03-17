var User = require('../models/user-model');
var Book = require('../models/book-model');
var mongoose = require('mongoose');

function initDb() {
  var book1 = new Book();
  var book2 = new Book();
  var user = new User();

  book1.title = 'Great Expectations';
  book1.author = 'Chucky D';
  book2.title = '1984';
  book2.author = 'George Orwell';

  mongoose.connect('mongodb://localhost/sg-mvc', {}, function(err) {
    mongoose.connection.db.dropCollection('users', function(err) {
      if (err) {
        console.log('could not connect to db: err:', err);
        process.exit(1);
      }
      if (err) {
        console.log('could not drop User collection: err:', err);
        process.exit(1);
      }
    mongoose.connection.db.dropCollection('books', function(err) {
      if (err) {
        console.log('could not drop User collection: err:', err);
        process.exit(1);
      }
    });
  });
}

function initDb() {
  book1.save(function(err) {
    if (err) {
      console.log('could not drop User collection: err:', err);
      process.exit(1);
    }
    book2.save(function(err) {
    if (err) {
      console.log('could not drop User collection: err:', err);
      process.exit(1);
      }
    });
    seedData();
    });
  };

initDb();
