let searchInputElement = document.getElementById('searchInput');
let searchResultsElement = document.getElementById('searchResults');
let spinnerElement = document.getElementById('spinner');
let infoElement = document.getElementById('info');
let toTopBtn = document.getElementById('toTopBtn');

let options = {
    method: 'GET',
}

function renderResult(resultArray) {
    searchResultsElement.textContent = '';
    searchInputElement.value = '';
    for (let each of resultArray) {
        renderEach(each);
    }
    spinnerElement.classList.add('d-none');
}

function renderEach(search) {
    //creating result container
    let resultContainerElement = document.createElement('a');
    resultContainerElement.classList.add('result-item',
        'bg-white', 'mb-2', 'mt-3', 'rounded',
        'd-flex', 'flex-row', 'justify-content-between');
    resultContainerElement.setAttribute('href', search.link);
    resultContainerElement.setAttribute('target', '_blank');
    searchResultsElement.appendChild(resultContainerElement);

    //creating content container
    let contentContainer = document.createElement('div');
    contentContainer.classList.add('p-2');
    resultContainerElement.appendChild(contentContainer);

    //creating title element
    let headingElement = document.createElement('span');
    headingElement.textContent = search.title;
    // headingElement.setAttribute('href', search.link);
    // headingElement.setAttribute('target', '_blank');
    headingElement.classList.add('result-title');
    contentContainer.appendChild(headingElement);

    //creating break element
    let breakElement = document.createElement('br');
    resultContainerElement.appendChild(breakElement);
    contentContainer.appendChild(breakElement);

    //create link element
    let linkElement = document.createElement('a');
    linkElement.textContent = search.link;
    // linkElement.setAttribute('href', search.link);
    // linkElement.setAttribute('target', '_blank');
    linkElement.classList.add('result-url');
    contentContainer.appendChild(linkElement);

    //create break element
    let breakElement2 = document.createElement('br');
    contentContainer.appendChild(breakElement2);

    //creating description element
    let descriptionElement = document.createElement('p');
    descriptionElement.textContent = search.description;
    descriptionElement.classList.add('link-description');
    contentContainer.appendChild(descriptionElement);
}

function searchwikipedia() {
    if (event.key == 'Enter') {
        spinnerElement.classList.remove('d-none');
        let text = searchInputElement.value;
        if (text === '') {
            infoElement.classList.remove('d-none');
            toTopBtn.classList.add('d-none');
            spinnerElement.classList.add('d-none'); // return null
            searchResultsElement.textContent = '';
        } else {
            infoElement.classList.add('d-none');
            text = searchInputElement.value;
            url = 'https://apis.ccbp.in/wiki-search?search=' + text;
            fetch(url, options)
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsonData) {
                    renderResult(jsonData.search_results);
                    toTopBtn.classList.remove('d-none');
                });
        }
    }
}
searchInputElement.addEventListener('keydown', searchwikipedia);