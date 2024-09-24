"use strict";
function toString(data) {
    if (typeof data === 'number' || typeof data === 'boolean') {
        return data.toString();
    }
    if (Array.isArray(data)) {
        return data.join(' ');
    }
    if (typeof data === 'object') {
        return JSON.stringify(data);
    }
    return 'data';
}
console.log(toString([1, 2, 3, 4]));
