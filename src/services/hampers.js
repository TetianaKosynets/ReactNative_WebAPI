import axios from 'axios';
const data = require('./data.json');

export const searchHamper = function (callback, search_term) {
    callback(data);

    axios.get('https://myproject20181206114305.azurewebsites.net/hamper/api/' + search_term);
        .then(response => {
            // success
            callback(response.data);
        })
        .catch(error => {
            console.log(error);
        });
};