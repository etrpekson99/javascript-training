// data structure is anything that stores data
const ages = [30, 29, 54];

// [30, 29, 54] => [30, 29, 54, _]
// [0, 1, 2] => [0, 1, 2, 3]
ages.push(60); // time complexity: O(1) => constant time complexity because the other items are not affected

// [30, 29, 54] => [_, 30, 29, 54, _] all items effectively have to be moved and get a new index
// [0, 1, 2] => [0, 1, 2, 3]
ages.unshift(10); // time complexity: O(n) => linear time complexity because for every item we have, we have to move the other items and reassign indexes

const myAge = ages[1]; // time complexity: O(1) => JS just goes into that item in memory

const namePopularity = [{
    userName: 'Eli',
    usages: 5,
}, {
    userName: 'Hannah',
    usages: 3,
}];

// BEST CASE: Eli is the first item => constant time complexity => O(1)
// WORST CASE: Eli is the last item => linear time complexity => O(n)
// AVERAGE CASE: Eli is somewhere in between => linear time complexity => O(n)
const usages = namePopularity.find(person => person.userName === 'Eli').usages;

const nameMap = {
    'Eli': 5,
    'Hannah': 3,
};

const usages = nameMap['Eli']; // constant time complexity => O(1)

// const realNameMap = new Map(); // can be used if we aren't using strings as keys

// for uniqueness, we can use a Set