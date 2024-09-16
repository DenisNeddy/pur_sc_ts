"use strict";
function getFullName(firstName, secondName) {
    return `${firstName} ${secondName}`;
}
const getFullNameArrow = (firstName, secondName) => {
    return `${firstName} ${secondName}`;
};
console.log(getFullName('Денис', 'Жилин'));
