import Counter from './Counter';
export default function App() {
    // q1
    console.log(greet('Alice'));
    console.log(greet('Bob', 'Good morning'));

    // q2
    destructureArr();

    // q3
    console.log(mergeArrays([1, 2], [3, 4]));
    console.log(sumAll(1, 2, 3, 4, 5));

    // q4
    const dog = new Dog();
    dog.makeSound();

    //q5
    main();

    //q6
    const counter = new CountUp(5);
    for (let num of counter) {
        console.log(num);
    }

    return (
        <>
            {/* q7 */}
            <Counter />
        </>
    );
}

// q1
// return text combinied userName and greetingMsg
const greet = (userName, greetingMsg = 'Hello') => {
    return `${greetingMsg}, ${userName}!`;
};

// q2
// destructure object and arr
const destructureArr = () => {
    const user = { name: 'John', age: 25, city: 'New York' };
    const numbers = [10, 20, 30];

    const { name, age, city } = user;
    console.log(name, age, city);
    const [num1, num2, num3] = numbers;
    console.log(num1, num2, num3);
};

// q3
// takes two array and merge them as a new array
const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

// q3
// take any number of arguments and return their sum
const sumAll = (...nums) => {
    let result = 0;
    for (const num of nums) {
        result += num;
    }
    return result;
};

// q4
// parent class
class Animal {
    makeSound() {
        console.log('Some sound...');
    }
}
// q4
// inherit Animal class
class Dog extends Animal {
    // overrides parents method
    makeSound() {
        console.log('Woof!');
    }
}

// q5
const fetchData = () => {
    return new Promise(resolve => {
        // return message after 2 seconds
        setTimeout(() => {
            resolve('Data fetched successfully');
        }, 2000);
    });
};

// q5
// call fetchData
async function main() {
    // call promise function
    const result = await fetchData();
    console.log(result);
}

// q6
// give number and make arr from 1 to target number
class CountUp {
    constructor(limit) {
        this.limitNum = limit;
    }
    [Symbol.iterator]() {
        let current = 1;
        return {
            next: () => ({
                value: current++,
                done: current > this.limitNum + 1, //add 1 to include target number
            }),
        };
    }
}
