class Course {
    #price;

    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.#price = price; // will call the settier
    }

    get price() {
        return `\$${this.#price}`;
    }

    set price(value) {
        if (value < 0) {
            throw 'Invalid value';
        }
        this._price = value;
    }

    calculate() {
        return this.length / this.#price;
    }

    summary() {
        return `Get the ${this.title} course that's ${this.length} hours long, for only ${this.#price}!`;
    }
}

// 1
const course1 = new Course('JS', 120, 1.99);
const course2 = new Course('.NET', 60, 12.99);

// 2
console.log(course1.calculate());
console.log(course2.summary());

// 3
class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title, length, price); // pass these to the parent constructor
        this.numOfExercises = numOfExercises;
    }
}

class TheoreticalCourse extends Course {
    publish() {
        console.log('nice');
    }
}

const practicalCourse = new PracticalCourse('CSS', 140, 6.99, 12);

const theoreticalCourse = new TheoreticalCourse('Vue', 40, 5.99);

console.log(practicalCourse);
theoreticalCourse.publish();

