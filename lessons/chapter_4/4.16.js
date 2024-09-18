"use strict";
// Asserts
const a_416 = {};
assertUser_416(a_416);
a_416.name = 'Вася';
function assertUser_416(obj) {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('Не пользователь');
}
