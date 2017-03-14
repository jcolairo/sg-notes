var express = require('express');
var app = express();
var port = 3000;
var users = [
  {
    id: '994',
    firstName: 'Jimmy',
    lastName: 'Fallon',
    email: 'jim@example.com'
  },
  {
    id: 'e01',
    firstName: 'Bob',
    lastName: 'Geldof',
    email: 'bob@example.com'
  }
];

function findUserIndexById(userID) {
  return users.find(function (user) {
    return user.id === userID;
  });
}

// Action: index

app.get('/users/', function(req, res) {
  var html = '<h1>List of users</h1>';

  html += '<ul>';
  for(var i = 0; i < users.length; i++) {
    html += '<li><a href="/users/' + i  + users[i].id + '">' + '' + users[i].firstName + ' ' + users[i].lastName + ' (' + users[i].email + ')' + '</a></li>';
  }
  html += '</ul>';
  res.status(200).send(html);
});

//Action: new

app.get('/users/new/', function(req, res) {
  res.status(200).send('<h1>Action: New</h1>');
});

//Action: create

app.post('/users/', function(req, res) {
  res.status(200).send('<h1>Action: Create</h1>');
});

//Action: edit

app.get('/users/:id/edit/', function(req, res) {
  res.status(200).send('<h1>Action: Edit</h1>');
});

//Action: update

app.put('/users/:id/', function(req, res) {
  res.status(200).send('<h1>Action: Update</h1>');
});

//Action: show

app.get('/users/:id/', function(req, res) {
  var userID = req.params.id;
  console.log('typeof userID: ' + typeof userID);
  var user = users[userID];
  var html = '<h1>Show user ' + userID + '</h1>';

  user = findUserIndexById(userID);

  for( var i = 0; i < users.length; i++) {
    if(users[i].id === userID) {
      user = users[i];
      break;
    }
  }

  if (user) {

    html += '<p>ID: ' + user.id + '</p>';
    html += '<p>First name: ' + user.firstName + '</p>';
    html += '<p>Last name: ' + user.lastName + '</p>';
    html += '<p>Email: ' + user.email + '</p>';

    res.status(200).send(html);
  } else {
    html += '<em>User not found with id ' + userID + '</em>';
  }
});

//Action: destroy

app.delete('/users/:id', function(req, res) {

  var userID = req.params.id;
  var userIndex;
  var status;
  var html = '<h1>Delete user' + userID + '</h1>';

  userIndex = findUserIndexById(userID);

  if (userIndex !== -1) {
    //user exists
    users.splice(userIndex, 1);
    html += 'User with id ' + userIndex + ' has been deleted';
    status = 200;
  } else {
    //trying to delete non-existant user
    html += '<em>User with ID ' + userID + ' does not exist; cannot delete</em>';
    status = 404;
  }
  res.status(status).send(html);
  console.log(users);

});

  // TODO implement for homework 2017-03-13
  // - get user specified by :id request parameter
  // - if it exists, remove it from the array
  // - if it does not exist, display message in <em> tags (user with id does not exist)

app.listen(port, function() {
  console.log('App is running on port', port);
});
