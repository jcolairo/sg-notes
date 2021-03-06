// Utilities used by test specs.
// Singleton (so init-cap the object name)
var TestUtils = {
  // We are looking for HTML that looks like this:
  // <a href="/books/58cbb8e616f8b0228f71b315">
  // We can the extract the user ID from the `href` attribute using a regex.
  getFirstBookIdFromUserPageHTML: function(html) {
    var regExp = /\/books\/[0-9a-f]+/;
    var result = regExp.exec(html)[0];
    var pathElements = result.split('/');

    return pathElements[2];
  },
  getFirstUserIdFromUserListHTML: function(html) {
    var regExp = /\/users\/[0-9a-f]+/;
    var result = regExp.exec(html)[0];
    var pathElements = result.split('/');

    return pathElements[2];
  },
  generateUniqueFirstName: function() {
    return 'firstName' + Math.random();
  }
};

module.exports = TestUtils;
