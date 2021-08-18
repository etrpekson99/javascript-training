// 1
const numbers = [1, 7, 3.4, 6.9, 12, 2];

const filtered = numbers.filter((num) => num > 5);
console.log(filtered);

const mapped = numbers.map((num) => ({ num }));
console.log(mapped);

const reduced = numbers.reduce(
   (currentResult, value) => currentResult * value,
   1
);
console.log(reduced);

// 2
const findMax = (...numbers) => {
   const sorted = numbers.sort((a, b) => {
      if (a > b) {
         return -1;
      } else if (a === b) {
         return 0;
      } else {
         return 1;
      }
   });
   return sorted[0];
};

console.log(findMax(...numbers));

// 3
const findMaxAndMin = (...numbers) => {
   const sorted = numbers.sort((a, b) => {
      if (a > b) {
         return -1;
      } else if (a === b) {
         return 0;
      } else {
         return 1;
      }
   });
   return [sorted[0], sorted[numbers.length - 1]];
};

const [max, min] = findMaxAndMin(...numbers);
console.log(max, min);

// 4
const uniqueList = new Set([1, 2, 3]);
uniqueList.add(1); // this will not work, the duplicate value will be ignored
console.log(uniqueList);

// other solution for finding max
const findMaxSolution = (...nums) => {
    let max = nums[0];
    for(const num of nums) {
        if (num > max) {
            max = num
        }
    }
    return max;
}
console.log(findMaxSolution(...numbers));

// other solution for finding min and max
const findMiMaxSolution = (...nums) => {
    let max = nums[0];
    let min = nums[0];
    for(const num of nums) {
        if (num > max) {
            max = num
        }
        if (num < min) {
            min = num;
        }
    }
    return [max, min];
}
console.log(findMiMaxSolution(...numbers));