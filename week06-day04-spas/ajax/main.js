$(function () {
  console.log('page is loaded');

  function ajaxTheManualWay () {
    var request = new XMLHttpRequest();

    console.log('AJAX the manual way');
    request.open('GET', 'http://api.icndb.com/jokes/random');
    request.addEventListener('load', function () {
      var json = JSON.parse(this.responseText);
      var jokeElement = document.getElementById('joke');

      jokeElement.innerHTML = json.value.joke;
      console.log('json.value.joke', json.value.joke);
    });
    request.send();
  }

  function ajaxTheJQueryWay () {
    console.log('AJAX the jQuery way');

    $.get('http://api.icndb.com/jokes/random', function (data) {
      $('#joke').html(data.value.joke);
    });
  }

  function selectRandomElement (items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  var ajaxFunctions = [ajaxTheManualWay, ajaxTheJQueryWay];
  setInterval(function () {
    var randsomAjaxFunction = selectRandomElement(ajaxFunctions);

    randsomAjaxFunction();
  }, 10000);
});
