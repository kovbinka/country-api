import dom from '../dom.js';

const renderCountryData = (data) => {
    const container = dom.container;
    container.innerHTML = '';

    const nameElement = document.createElement('h2');
    nameElement.classList.add('title');
    nameElement.textContent = data.name;

    const capitalElement = document.createElement('p');
    capitalElement.classList.add('capital');
    capitalElement.textContent = `🌆Capital: ${data.capital}`;

    const populationElement = document.createElement('p');
    populationElement.classList.add('population');
    populationElement.textContent = `👪Population: ${data.population.toLocaleString()}`;

    const languagesElement = document.createElement('p');
    languagesElement.classList.add('language');
    languagesElement.textContent = `📢Languages: ${data.languages.join(', ')}`;

    const currencyElement = document.createElement('p');
    currencyElement.classList.add('currency');
    currencyElement.textContent = `💰Currency: ${data.currency} (${data.currencySymbol})`;

    const flagElement = document.createElement('img');
    flagElement.id = 'imageFlag';
    flagElement.src = data.flag;
    flagElement.alt = `${data.name} flag`;
    flagElement.style.maxWidth = '100px';

    container.append(
        nameElement,
        capitalElement,
        populationElement,
        languagesElement,
        currencyElement,
        flagElement
    );
};

export default renderCountryData;
