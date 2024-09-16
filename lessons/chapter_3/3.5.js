"use strict";
// Объекты
function getFullName_3_5(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Денис',
    surname: 'Жилин',
    city: 'Москва',
    age: 33,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getFullName_3_5(user));
