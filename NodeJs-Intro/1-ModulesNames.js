
const name1 = "Hashi";
const name2 = "Mora";
const name3 = "Alex";


// ! CommonJS
module.exports = {name1, name2};
module.exports.items = ['item1', 'item2'];
const person = {
    name: "Alex"
}
module.exports.person = person;