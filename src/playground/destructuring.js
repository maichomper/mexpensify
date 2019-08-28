// // Object Destruction

// const person = {
//   name: 'Micho',
//   age: 32, 
//   height: 1.80,
//   location: {
//     city: 'CDMX',
//     temp: 28
//   }
// };

// const {name, age, height = '1.81'} = person;
// console.log(`${name} is ${age} with a height of ${height}`);

// const {city, temp: temperature} = person.location;
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName); // Self-Published


const address = ['Coahuila 234', 'interior 5', 'CDMX', '06700'];

const [street, , city, zip] = address;

console.log(`You are in ${city}.`);