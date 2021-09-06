// jest automatically uses mocks of global node modules
// so we don't have to import this mock in our tests anymore
const get = (url) => {
    return Promise.resolve({
        data: { title: 'delectus aut autem' }
    });
}

exports.get = get;