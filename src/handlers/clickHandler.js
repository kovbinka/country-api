import apiRequest from '../../api/apiRequest.js';
import extractCountryData from '../utils/extractCountryData.js';
import renderCountryData from '../components/renderCountryData.js';
import dom from '../dom.js';

const countryHandler = () => {
    const userInput = dom.input.value;
    const elementsExist = document.querySelector('imageFlag');

    return apiRequest(userInput)
        .then((data) => {
            const extractedData = extractCountryData(data);
            if (elementsExist) {
                updateDom(extractedData);
            }
            renderCountryData(extractedData);
            return extractedData;
        })
        .catch((err) => {
            dom.container.innerText = 'Oops.. Try again';
            console.error('Error in countryHandler:', err.message);
            throw err;
        });
};

export default countryHandler;
