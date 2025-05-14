const updateDom = (data) => {
    //country name
    document.querySelector('.title').innerText =
        data.name.official || data.name.common;

    //capital
    document.querySelector('.capital').innerText = `🌆Capital: ${data.capital}`;

    //population
    document.querySelector('.population').innerText =
        `👪Population: ${data.population.toLocaleString()}`;

    //language
    document.querySelector('.language').innerText =
        `📢Languages: ${data.languages.join(', ')}`;

    //currency
    document.querySelector('.currency').innerText =
        `💰Currency: ${data.currency} (${data.currencySymbol})`;

    //flag
    document.querySelector('.imageFlag').src = data.flag;
    document.querySelector('.imageFlag').alt = `${data.name} flag`;
};
