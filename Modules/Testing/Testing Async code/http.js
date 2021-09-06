const axios = require('axios');

const fetchData = () => {
  // we won't see this console.log when we run a test since fetchData() is mocked
  // it will however be called when we mock axios
  console.log('fetching data');
  return axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      return response.data;
    });
};

exports.fetchData = fetchData;
