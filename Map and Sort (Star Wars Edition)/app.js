const listElement = document.querySelector("#list");
const buttons = document.querySelectorAll('input[type="button"]');

const starWarsFilms = [
   {
      'title': 'Episode I - The Phantom Menace',
      'order': 1,
      'year': 1999
   },
   {
      'title': 'Episode II - Attack of the Clones',
      'order': 2,
      'year': 2002
   },
   {
      'title': 'Episode III – Revenge of the Sith',
      'order': 3,
      'year': 2005
   },
   {
      'title': 'Solo – A Star Wars Story',
      'order': 4,
      'year': 2018
   },
   {
      'title': 'Rogue One – A Star Wars Story',
      'order': 5,
      'year': 2016
   },
   {
      'title': 'Episode IV – A New Hope',
      'order': 6,
      'year': 1977
   },
   {
      'title': 'Episode V – The Empire Strikes Back',
      'order': 7,
      'year': 1980
   },
   {
      'title': 'Episode VI – The Return of the Jedi',
      'order': 8,
      'year': 1983
   },
   {
      'title': 'Episode VII – The Force Awakens',
      'order': 9,
      'year': 2015
   },
   {
      'title': 'Episode VIII – The Last Jedi',
      'order': 10,
      'year': 2017
   },
   {
      'title': 'Episode IX – Untitled',
      'order': '11',
      'year': 2019
   },
];

function buildList() {
   listElement.innerHTML = starWarsFilms
      .map(item => `
         <li>
            ${item.title}
            <span class="year">${item.year}</span>
         </li>
      `)
      .join("");
}

function sortByEpisode() {
   const ordered = starWarsFilms.sort((a, b) => (a.order > b.order ? 1 : -1));
   buildList();
}

function sortByYear() {
   const ordered = starWarsFilms.sort((a, b) => (a.year > b.year ? 1 : -1));
   buildList();
}

function handleStates(e) {
   const action = e.target.dataset.action;
   switch (action) {
      case "episode":
         sortByEpisode();
         break;
      case "year":
         sortByYear();
         break;
   }
}

buttons.forEach(btn => btn.addEventListener("click", handleStates));
window.onload = buildList();