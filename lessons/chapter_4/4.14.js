"use strict";
// Type Guard
const user_414 = {
    name: 'Вася',
    email: 'vasya@ya.ru',
    login: 'vasya'
};
function logId_414(id) {
    if (isString_414(id)) {
        console.log(id); // id строка
    }
    else {
        console.log(id); // id число
    }
}
// В целом Type Guard - это функция, которая проверяет типы на соответсвие
// и возвращает Boolean результат проверки
// Пример(примитивные):
function isString_414(x) {
    return typeof x === 'string';
}
function isAdmin_414(user) {
    return 'role' in user;
}
// Альтернативная проверка - альтернативный TypeGuard
function isAdminAlt_414(user) {
    return user.role !== undefined;
}
function setRoleZero_414(user) {
    if (isAdmin_414(user)) {
        user.role = 0; // тут уже свойства админа
    }
    else {
        // тут уже пользователь Адмим
    }
}
