var Book = require('../models/book-model');

// Action: edit
function editBook(req, res) {
  var bookId = req.params.id;

  Book.findOne({ _id: bookId }, function (err, book) {
    if (err) {
      console.log('Could not get book:', err);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not get book');
      return;
    }
    res.render('books/edit', {
      title: 'Edit book',
      book: book
    });
  });
}

// Action: update
function updateBook(req, res) {
  var bookId = req.params.id;
  var userId = req.params.userId;
  var updatedBook = {
    title: req.body.title,
    author: req.body.author
  };

  Book.findOneAndUpdate({ _id: bookId }, updatedBook, function (err) {
    if (err) {
      console.log('Could not get existing book to update:', err.message);
      res.status(404).send('Could not get existing book to update');
      return;
    }
    res.redirect('/users/' + userId);
  });
}

// Action: destroy
function destroyBook(req, res) {
  var bookId = req.params.id;
  var userId = req.body.userId;


  Book.deleteOne({ _id: bookId }, function (err) {
    if (err) {
      console.log('Could not get book to delete:', err.message);
      res.status(404).send('Could not get book to delete');
      return;
    }
    res.redirect('/users/' + userId);
  });
}


module.exports = {
  destroy: destroyBook,
  edit: editBook,
  update: updateBook
};
