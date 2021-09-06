// setup mock functions that replace our functions when running tests

const fetchData = () => {
  return Promise.resolve({title: 'delectus aut autem'})
};

exports.fetchData = fetchData;
