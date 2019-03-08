const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// 0. Initialise empty array
const cities = [];

// 1. Get the contents of the file with fetch
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

// 2. Create a new array with the matching words
function findMatches(input, cities) {
  return cities.filter(place => {
    const regex = new RegExp(input, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

// 3. Format numbers
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 4. Display matching words
function displayMatches() {
  const matchArray = findMatches(this.value, cities).slice(0, 8);
  const html = matchArray
    .map(place => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );

      return `
            <li>
              <span class="name">
               ${cityName}, ${stateName}
               </span>
              <span class="population">
                ${numberWithCommas(place.population)}
              </span>
            </li>
          `;
    })
    .join('');

  // Empty resultArea if there is no search input
  if (this.value === '') {
    resultArea.innerHTML = '';
  } else {
    resultArea.innerHTML = html;
  }
}

// 5. Grab inputs and add event listeners
const searchInput = document.querySelector('.search');
const resultArea = document.querySelector('.results');

['change', 'keyup'].forEach(e => {
  searchInput.addEventListener(e, displayMatches);
});
