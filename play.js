const name1 = 'Max';
let age1 = 29;
const hasHobbies = true;

age1 = 30;

// name = 'Maximilian';
console.log(name1);
console.log(age1);
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
console.log(summarizeUser(name1, age1, hasHobbies));
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




const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

// Destructuring 
const printNameDestructuring = ({ name}) => {
    console.log(name );
};
printNameDestructuring(person);

const {name, age} = person;
console.log(name, age);

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// callback fun
const fetchData = (callback) => {
    setTimeout(() => {
        callback('fetchData: Done!');
    }, 1500);
}

// promise
const fetchData1 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fetchData1: Done!');
        }, 1500);
    });
   return promise;
}

// Async code
setTimeout(() => {
    console.log('fetchData: Timer is done!');
    fetchData((text) => {
        console.log( text);
    });
}, 2000);

setTimeout(() => {
    console.log('fetchData1: Timer is Done!');
    fetchData1().then((text) => {
        console.log(text);
    });
}, 2000);

setTimeout(() => {
    console.log('fetchData1: Timer is Done! nested');
    fetchData1().then((text) => {
        console.log(text);
        return fetchData1().then(text2 => {
            console.log(text2);
        })
    });
}, 2000);

// more readable
setTimeout(() => {
    console.log('fetchData1: Timer is Done! nested2');
    fetchData1().then(text => {
        console.log('-------')
        console.log(text);
        return fetchData1();
    }).then(text2 => {
        console.log(text2);
    });
}, 2000);


console.log('Hello!');
console.log('Hi!');