import apiRequest from "../api/apiRequest.js";
import extractCountryData from "../utils/extractCountryData.js";
import renderCountryData from "../utils/renderCountryData.js";
import dom from "../dom.js";

const countryHandler = () => {
    const userInput = dom.input.value;
    return apiRequest(userInput)
        .then(data => {
            const extractedData = extractCountryData(data);
            renderCountryData(extractedData);
            return extractedData;
        })
        .catch(err => {
            dom.container.innerText = "Oops.. Try again"
            console.error("Error in countryHandler:", err.message);
            throw err;
        });
};

export default countryHandler;