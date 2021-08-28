const customers = ['Elijah', 'EJ', 'Raph'];

const activeCustomers = ['Elijah', 'EJ'];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);