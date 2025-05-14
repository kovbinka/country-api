import countryHandler from './clickHandler.js';

export const typeEnter = function (e) {
    if (e.key === 'Enter') {
        countryHandler();
    }
};
