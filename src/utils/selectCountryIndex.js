const selectCountryIndex = (apiData) => {
    if (apiData.length <= 1) return 0;

    const countryNames = apiData
        .map((country, index) => `${index}: ${country.name.common}`)
        .join('\n');
    const ask = prompt(
        `Multiple countries found. Please choose one by typing the number:\n${countryNames}`
    );
    const num = Number(ask);

    if (isNaN(num) || num < 0 || num >= apiData.length) {
        alert(
            `Invalid input. Defaulting to the first country: ${apiData[0].name.common}`
        );
        return 0;
    }

    return num;
};

export default selectCountryIndex;
