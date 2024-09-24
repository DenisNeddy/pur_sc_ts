"use strict";
// Пример встроенных generic
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//----------------------------------------------------------
// Цели лекции:
// Понять, зачем нужны дженерики в TypeScript.
// Разобраться с примерами встроенных дженериков: Array, Promise, Record.
// Узнать, как создавать переиспользуемые функции и классы с дженериками.
// Основные пункты:
// Зачем нужны дженерики?
// В JavaScript нет типизации, поэтому и нет необходимости в дженериках.
// В TypeScript, с введением типов, дженерики позволяют создавать обобщения для переиспользования кода.
// Примеры использования встроенных дженериков:
// Array: Можно типизировать массивы, указывая тип элементов, например, Array<number> для массива чисел.
// Promise: Позволяет указать тип возвращаемого значения, например, Promise<number> для промиса, возвращающего число.
// Record: Используется для создания словарей с ключами и значениями определённого типа, например, Record<string, boolean> для объекта со строковыми ключами и булевыми значениями.
// Практическое применение дженериков:
// Дженерики позволяют динамически менять типы в функциях и классах, делая код более гибким и переиспользуемым.
// Пример создания небольшой функции или класса с дженериками для демонстрации их полезности.
//----------------------------------------------------------
const arrNum = [1, 2, 3];
const arrStr = ["1", "2", "3"];
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = yield new Promise((res, rej) => {
            res(1);
        });
    });
}
const check = {
    drive: true,
    kpp: false
}; // Словарь из типаов
