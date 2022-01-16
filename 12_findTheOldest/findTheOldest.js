const year = new Date().getFullYear();

const computeAge = function (person) {
    var yearUsed = year;
    if ('yearOfDeath' in person) {
        yearUsed = person.yearOfDeath;
    }
    let age = yearUsed - person.yearOfBirth;
    return age;
}
const findTheOldest = function (people) {
    var oldest;
    people.sort((a, b) => computeAge(a) - computeAge(b));
    oldest = people[people.length - 1];
    return oldest;
};



// Do not edit below this line
module.exports = findTheOldest;
