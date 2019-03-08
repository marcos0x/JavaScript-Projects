const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const buttons = document.querySelectorAll('input[type="button"]');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();

  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false
  };

  items.push(item);

  // Create list
  populateList(items, itemsList);

  // Store it in localStorage
  localStorage.setItem('items', JSON.stringify(items));

  // Clear input box
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}"
        ${plate.done ? 'checked' : ''}
        }>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
    })
    .join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const element = e.target;
  const index = element.dataset.index;
  items[index].done = !items[index].done;

  // Store it in localStorage
  localStorage.setItem('items', JSON.stringify(items));
  // Populate list on page load
  populateList(items, itemsList);
}

function handleStates(e) {
  const action = e.target.dataset.action;

  switch (action) {
    case 'clear':
      items.length = 0;
      break;
    case 'check':
      console.log('checked');
      items.forEach(item => (item.done = true));
      break;
    case 'uncheck':
      console.log('unchecked');
      items.forEach(item => (item.done = false));
      break;
  }
  // Store it in localStorage
  localStorage.setItem('items', JSON.stringify(items));
  // Populate list on page load
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
buttons.forEach(btn => btn.addEventListener('click', handleStates));
// Populate list on page load
populateList(items, itemsList);