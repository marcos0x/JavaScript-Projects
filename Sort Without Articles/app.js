const listElement = document.querySelector("#list");
const buttons = document.querySelectorAll('input[type="button"]');

const unsorted = [
   "Down and Out in Paris and London",
   "Burmese Days",
   "A Clergyman's Daughter",
   "Keep the Aspidistra Flying",
   "The Road to Wigan Pier",
   "Homage to Catalonia",
   "Coming Up for Air",
   "Animal Farm",
   "Nineteen Eighty-Four"
];

(function buildList() {
   listElement.innerHTML = unsorted.map(item => `<li>${item}</li>`).join("");
})();

function strip(item) {
   return item.replace(/^(a |the |an )/i, "").trim();
}

function sortByTitle() {
   console.log("title");

   const sorted = [...unsorted].sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

   listElement.innerHTML = sorted.map(item => `<li>${item}</li>`).join("");
}

function sortByYear() {
   console.log("year");

   listElement.innerHTML = unsorted.map(item => `<li>${item}</li>`).join("");
}

function handleStates(e) {
   const action = e.target.dataset.action;
   switch (action) {
      case "title":
         sortByTitle();
         break;
      case "year":
         sortByYear();
         break;
   }
}

buttons.forEach(btn => btn.addEventListener("click", handleStates));