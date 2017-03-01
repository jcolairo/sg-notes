console.log('in main.js');

document.addEventListener('DOMContentLoaded', function () {

  console.log(document);

  console.log('--- using querySelectorAll:');
  var selectedListItems = document.querySelectorAll('.selected');


  console.log('selected:', selectedListItems);

  for (var i = 0; i < selectedListItems.length; i++) {
    console.log('selected list item style: ', selectedListItems[i].style);
    selectedListItems[i].style.color = 'red';
  }

  console.log('--- Create and append a new element');
  var newListItem = document.createElement('li');

  newListItem.innerHTML = 'in New York';

// we are going to call .appendChild on the parent <ul> element.
// That <ul> element has an id attribute.

// So we retrieve the DOM element that contains the list items,
// because we want to call .appendChild() on it.
// NOTE:  we do NOT pass a CSS selector ('#item-list') to the
// .getElementById() method.
  var listContainer = document.getElementById('item-list');

  listContainer.appendChild(newListItem);

  newListItem.setAttribute('class', 'muted');

  newListItem.style.color = 'blue';

  console.log('--- DOM events');

  var pickMeButton = document.getElementById('pickMeBtn');

  function handleButtonClick () {
    alert('Cicked!');
  }

  pickMeButton.addEventListener('click', handleButtonClick);

  document.getElementById('pickMeBtn').innerHTML = 'You have clicked this button';



});
