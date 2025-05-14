const extractCountryData = (apiData) => {
    let num = 0;
    if (apiData.length > 1) {
        const ask = prompt('Type 0 or 1');
        num = Number(ask);
    }
    const countryData = apiData[num];
    return {
        name: countryData.name?.common || "Unknown",
        officialName: countryData.name?.official || "Unknown",
        capital: countryData.capital?.[0] || "Unknown",
        population: countryData.population || 0,
        languages: countryData.languages
            ? Object.values(countryData.languages)
            : [],
        currency: countryData.currencies
            ? Object.values(countryData.currencies)[0]?.name || "Unknown"
            : "Unknown",
        currencySymbol: countryData.currencies
            ? Object.values(countryData.currencies)[0]?.symbol || ""
            : "",
        flag: countryData.flags?.png || ""
    };
};

export default extractCountryData;