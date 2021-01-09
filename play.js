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


const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

console.log(person);
console.log(person.greet());

const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => {
    return 'Hobby: '+ hobby;
}));

console.log(hobbies);
hobbies.push('Programming');
console.log(hobbies);

const copiedArray = hobbies.slice();
console.log(copiedArray);

//new array
const copiedArray1 = [hobbies];
console.log(copiedArray1);

// copy array using spread operator
const copiedArraySpread = [...hobbies];
console.log(copiedArraySpread);

// spread operator
const copiedPerson = {...person};
console.log(copiedPerson);


const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(toArray(1, 2, 3));

// rest operator

const toArrayRestOperator = (...args) => {
    return args;
};

console.log(toArrayRestOperator(1, 2, 3, 4));