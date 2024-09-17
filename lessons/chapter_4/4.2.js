"use strict";
// Union типы
const arr_42 = ['строка', 1];
// При использование union типов нужно использовать так назвыемыю методику сужения
function logId(id) {
    // Пример методики сужения типов
    if (typeof id === 'string') {
        console.log(id);
    }
    else if (typeof id === 'boolean') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
logId(1);
logId('Что то тут написано');
logId(true);
function logError(error) {
    if (Array.isArray(error)) {
        console.log(error);
    }
    console.log(error);
}
function logObj(obj) {
    if ('a' in obj) {
        console.log(obj);
        // тут будет свойство а
    }
    else {
        console.log(obj);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
        console.log(a);
    }
    else {
        console.log(a);
    }
}
// Заключение
// Union тип это смешанный тип данных , типы которых ты сам прописываешь, то есть описываешь варианты, которые могут быть
// Чтобы дальше работать с union типами нужно создавать сужение, то есть условием проверять тип данных и после этого взаимодействовать с этими данными после проверки типа.
