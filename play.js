const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

// name = 'Maximilian';
console.log(name);
console.log(age);
console.log(hasHobbies);

const summarizeUser = (userName, userAge, userHasHobby) => {
    return 'Name is ' + userName + ', Age is ' + userAge + ' and the user has hobbies ' + userHasHobby;
}

const add = (a, b) => {
    return a + b;
}

const sum = (a, b) => a + b;

const addOne = a => a + 1;

const addRandom = () => 2 + 3;
console.log(summarizeUser(name, age, hasHobbies));
console.log(add(10, 30));
console.log(sum(20, 30));
console.log(addOne(3));
console.log(addRandom());
