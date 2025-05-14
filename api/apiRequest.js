import data from '../src/data.js';

const apiRequest = async (country) => {
    try {
        const response = await fetch(`${data.originUrl}/${country}`);
        if (response.status !== 200) {
            throw new Error(
                `Sorry, something wrong :( Status: ${response.status})`
            );
        } else {
            const result = response.json();
            console.log(result);
            return result;
        }
    } catch (err) {
        console.log(err.message);
    }
};

export default apiRequest;
