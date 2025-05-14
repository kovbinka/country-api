import countryHandler from './createCountryHandler.js';

export const typeEnter = function (e) {
    if (e.key === 'Enter') {
        countryHandler();
    }
};
