// Пример встроенных generic

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

const arrNum: Array<number> = [1,2,3];
const arrStr: Array<string> = ["1","2","3"];

async function test() {
    const a = await new Promise<number>((res, rej) => {
        res(1);
    })
}

const check: Record<string, boolean> = {
    drive: true,
    kpp: false
} // Словарь из типаов