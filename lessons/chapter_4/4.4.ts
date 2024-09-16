// Типы Aliases
// Эффективный способ записи типов

type httpMethod = 'post' | 'get';


function fetchWitchAuth_44(url: string, method: httpMethod): 1 | -1 {
    return 1;
}

let method1_44 = 'postwwww';

fetchWitchAuth_44('string', method1_44 as 'post')

// Типизирование объекта

type User = {
    name: string, 
    age: 33,
    skills: string[]
}


let user: User = {
    name: 'Тод',
    age: 33,
    skills: ['1', '2']
}


// Интерсекшен типов

type Role = {
    // name: string, 
    id: number;
}

type UserWithRole = User & Role

let user2: UserWithRole = {
    name: 'Тод',
    age: 33,
    skills: ['1', '2'],
    id: 3
}

// Что такое Type Alias? Type Alias в TypeScript позволяет создавать пользовательские типы данных с использованием уже существующих. Это упрощает и улучшает читаемость кода, особенно когда один и тот же тип данных используется в различных местах программы.