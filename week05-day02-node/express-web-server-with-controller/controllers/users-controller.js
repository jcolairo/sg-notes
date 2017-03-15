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

var currentUserId = 100;

function findUserIndexById(userId) {
  return users.findIndex(function (user) {
    return user.id === userId;
  });
}

function getNextUserId() {
  currentUserId++;

  return currentUserId.toString();
}

// Action: index
function indexUsers(req, res) {
  res.render('users/index', {
    title: 'User list: ',
    users: users
  });


  // var html = '<h1>List of users</h1>';
  //
  // html += '<ul>';
  // for (var i = 0; i < users.length; i++) {
  //   html += '<li><a href="/users/' + users[i].id + '">' + users[i].firstName + ' ' + users[i].lastName + ' (' + users[i].email + ')' + '</a></li>';
  // }
  // html += '</ul>';
  // res.status(200).send(html);
}

// Action: new
function newUser(req, res) {
  res.render('users/new', {
    title: 'New User'
  });
}

// Action: create
function createUser(req, res) {
  var userId = getNextUserId();
  var newUser = {
    id: userId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  };
  users.push(newUser);
  res.redirect('users/');
}

// Action: edit
function editUser(req, res) {
  var userId = req.params.id;
  var userIndex;
  var user;
  var status;

  userIndex = findUserIndexById(userId);

  if (userIndex !== -1) {
    user = users[userIndex];
    status = 200;
  } else {
    status = 404;
  }

  res.status(status).render('users/edit', {
    title: 'Edit user ' + userId,
    user: user
  });
}

// Action: update
function updateUser(req, res) {

  var userId = req.params.id;
  var user;
  var json;
  var userIndex = findUserIndexById(userId);


  if (userIndex !== -1) {
    user = users[userIndex];
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    res.redirect('/users');
  } else {
    json = { error: 'Could not find user with id ' + userId};
    res.status(404).send(json);
  }
}

// Action: show
function showUser(req, res) {
  var userId = req.params.id;
  var userIndex;
  var user;
  var status;

  userIndex = findUserIndexById(userId);

  if (userIndex !== -1) {
    user = users[userIndex];
    status = 200;
  } else {
    status = 404;
  }

  res.status(status).render('users/show', {
    title: 'Show user ' + userId,
    user: user
  });
}

// Action: destroy
function destroyUser(req, res) {
  var userId = req.params.id;
  var userIndex;
  var json;

  userIndex = findUserIndexById(userId);

  if (userIndex !== -1) {
    // user exists
    users.splice(userIndex, 1);
    res.redirect('/users/delete');
  } else {
    // trying to delete non-existent user
    json = { error: 'Could not find user with id ' + userId};
    res.status(404).send(json);
  }
}

module.exports = {
  index: indexUsers,
  new: newUser,
  create: createUser,
  edit: editUser,
  update: updateUser,
  show: showUser,
  destroy: destroyUser
};
