const findTheOldest = function(people) {
    let maxAge = 0;
    let oldestPerson = undefined;
    for(person of people) {
        let age;
        if ("yearOfDeath" in person) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = new Date().getFullYear() - person.yearOfBirth;
        }
        if(age > maxAge) {
            maxAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
