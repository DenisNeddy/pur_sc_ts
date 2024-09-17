// Тип Never

//-------------------------------------------

// Цели лекции:
// Понимание назначения и использования типа never в TypeScript.
// Примеры ситуаций, в которых используется never.
// Различие между never и void.
// Практические примеры, демонстрирующие преимущества типа never.
// Введение в never
// Тип never указывает, что что-то никогда не произойдет.
// Помогает писать более безопасный и эффективный код.
// Примеры использования never
// Функции, не возвращающие значение:
// GenerateError: кидает ошибку и не возвращает управление. Правильный тип возврата – never.
// Бесконечные циклы или рекурсии:
// dump error: содержит бесконечный цикл while true. Тип возврата – never.
// В условных конструкциях:
// При проверке возможных ветвей выполнения команды switch case.
// never vs void
// void может возвратить undefined, never – никогда не вернется.
// never блокирует присваивание для переменных (ничего не может быть присвоено типу never).
// Практическое применение never
// Сообщение об ошибке при расширении типов:
// Используя never, можно обеспечить вывод ошибки на этапе компиляции при добавлении новых случаев в switch.
// Исчерпывающая проверка типов:
// Функция setTypeToBoolean для конвертации типов в boolean. Использование never помогает гарантировать, что функция всегда возвращает boolean, предотвращая потенциальные ошибки при выполнении.

//-------------------------------------------


// - Функция никогда не вернется

function genereateError_411(message: string): never {
    throw new Error(message)
}


// - Функция никогда не вернется

function dumpError__411(): never {
    while(true) {

    }
}


// - Функция никогда не вернется

function rec_411():never
 {
    return rec_411();
 }

//  const a: never = 1; - переменной a ничего нельзя присвоить, так что это ошибочная запись


type paymentAction_411 = 'refund' | 'checkout' //  | 'reject';

function rroccessAction_411(action: paymentAction_411) {
    switch(action) {
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        default: 
            const _: never = action;
            throw new Error('Нет такого action')
    }
}


function isString_411(x: string | number ): boolean {
    if(typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false; 
    }

    genereateError_411('Текст ошибки')

}