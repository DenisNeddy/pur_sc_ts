// Asserts

//---------------------------------------------------------------

// Основы assert
// Определение: В JavaScript и TypeScript, assert - это специальные функции, предназначенные для проверки условий при выполнении кода. Если проверяемое условие не выполняется, функция генерирует ошибку.
// Применение: Особенно часто assert функции используются при написании тестов. В Node.js также есть встроенный пакет ассертов для выполнения различных проверок.
// Цель: Проверка, что определенный объект соответствует ожидаемому типу или структуре.
// Пример с проверкой типа пользователя
// Постановка задачи: Предположим, мы получаем объект из внешнего API и хотим убедиться, что он представляет тип Пользователь. В примере пользователь имеет свойство name.
// Реализация через простую функцию:
// Сначала пишем функцию assertUser, принимающую объект неизвестного типа (unknown).
// Функция проверяет, является ли объект ненулевым (!= null), имеет ли он свойство name.
// В зависимости от результата проверки, функция может возвращать true или false.
// Проблемы простого подхода:
// Нужно оборачивать вызов функции assertUser в условный оператор if для дальнейшей работы с объектом как с Пользователем, что не всегда удобно.
// Модификация функции с использованием ключевого слова assert в TypeScript
// Ключевое изменение: В TypeScript существует специальное ключевое слово assert для определения функций, выполняющих проверку и выбрасывающих ошибку при невыполнении условия.
// Реализация с assert:
// Функция assertUser модифицируется так, что вместо возвращения true или false, теперь она выбрасывает ошибку, если объект не является Пользователем.
// Это позволяет нам избавиться от необходимости внешней проверки условия и делает код более лаконичным.
// Преимущества:
// Улучшение читаемости и поддержки кода.
// Уменьшение количества вложенных условий.
// После использования функции assertUser, объект автоматически признается Пользователем, и мы можем безопасно обращаться к его свойствам.



//---------------------------------------------------------------


interface User_416 {
    name: string,
}

const a_416 = {

};

assertUser_416(a_416);
a_416.name = 'Вася';

function assertUser_416(obj: unknown): asserts obj is User  {
    if(typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    } 
    throw new Error('Не пользователь');
}