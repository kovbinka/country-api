import countryHandler from "../handlers/clickHandler.js";

export const typeEnter = function (e) {
    if (e.key === 'Enter') {
      countryHandler();
    }
};