// part  (1): (choose)

// 1- array جديده بنفس الطول
// 2- find()
//3-Array جديده بالعناصر اللي حققت الشرط
//4-undefined
//5-Arrays

// part (2): (true or false)

// 1- falsa
// 2- true
// 3- true
// 4- true
// 5- false

// part (3): (complete)

// 1- for each()
// 2- filter()
// 3- find()
// 4- map()

// part (4): 
// (1)
const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

// (2)

for (const index in fruits) {
    console.log(index);
}

// (3)
fruits.forEach((fruit, index) => {
    console.log(index + " -> " + fruit);
});


// part (5):
// (1)
const sum = (a, b) => {
    return a + b;
};

// (2)

const user = {
    name: "zenab",
    age: 20
};

const { name, age } = user;

// (3)
console.log(`Hello ${name}`);

// (4)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = [...arr1, ...arr2];
console.log(result);

// part (6):
const students = [
    { name: "zenab", degree: 70 },
    { name: "fatma", degree: 95 },
    { name: "yazan", degree: 40 },
    { name: "mohamed", degree: 85 },
    { name: "zozo", degree: 55 }
];
// (1)
const names = students.map((student) => {
    return student.name;
});
console.log(names);

// (2)
const results = students.filter((student) => {
    return student.degree >= 60;
});

console.log(results);

// (3)
const student = students.find((student) => {
    return student.degree > 90;
});

console.log(student);

// (4)
students.forEach((student) => {
    console.log(student.name);
});

// part (7): (سؤال الBonus)
const numbers = [5, 10, 15, 20];
const total = numbers.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);







