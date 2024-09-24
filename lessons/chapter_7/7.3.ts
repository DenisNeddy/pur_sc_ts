// Пишем функцию с generic

//-------------------------------------------------------


// Проблемы без дженериков:
// Пример из Go: отсутствие дженериков усложняло работу.
// Без дженериков: необходимость использовать any приводит к потере типизации.
// Пример использования без дженериков:
// Создание функции logMiddleware для логирования данных разных типов.
// Сначала для number, затем расширение до string и union type.
// Ввод any как финального решения приводит к потере типизации результата.
// Введение в дженерики:
// Дженерики позволяют создавать универсальные функции, работающие с любыми типами данных.
// Пример: функция логирования logMiddleware, способная обрабатывать разные типы данных без потери типизации результата.
// Основные особенности дженериков:
// Обозначение дженериков при помощи угловых скобок и обычно буквы T.
// Возможность использования любого имени для дженерика, хотя общеприняты краткие имена.
// Дженерики улучшают типизацию путём сохранения типа данных сквозь функции.
// Примеры дженериков в действии:
// Функция разделения массива пополам:
// Первый пример показывает, как параметризовать функцию дженериком для работы с массивами разных типов.
// Практические аспекты:
// Дженерики требуют точных ограничений (например, работа с массивами), для корректной работы.
// Пример с функцией splitHalf: демонстрация ограничения дженерика для работы только с массивами.


//-------------------------------------------------------

function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}

const res = logMiddleware<number>(10);

function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
}

getSplitedHalf<number>([1,2,3])