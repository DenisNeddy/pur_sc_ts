"use strict";
//  Optional
// Такая запись не сработает см.ниже. Опциональный оператор позволяет параметру не быть
// interface User_47 {
//     login: string, 
//     password: string | undefined
// }
const user_47 = {
    login: 'ya@ya.ru',
};
const user_47_1 = {
    login: 'sdfga'
};
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
function testPass_47(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type; // EDC сама правильно подставляет оператор вопроса, который говорит, что если пароль будет, то у него будет один их двух литеральных типов primery или secondary
    // const t = user.password ? user.password.type : undefined; - альтернатива
}
// Nullish Coalescing (??):
function test_47(param) {
    const p = param !== null && param !== void 0 ? param : 'что то другое вызвать, если нет param';
}
