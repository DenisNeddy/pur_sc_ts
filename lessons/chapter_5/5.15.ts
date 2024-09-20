// Типизация this

//-----------------------------------------------

// Основы this и строительные классы
// Цель лекции: Понимание работы ключевого слова this в контексте классов и типов.
// Пример: Через билдер классы (UserBuilder), объяснили использование this для метода setName, который возвращает экземпляр того же класса для методов цепочки.
// Типизация this в TypeScript
// Особенность TypeScript: Возвращает тип this, обеспечивая корректную типизацию для цепочечных вызовов.
// Проблема: Без использования this могут возникнуть коллизии при работе с наследуемыми классами.
// Расширение классов и типы
// Пример: AdminBuilder, унаследованный от UserBuilder, демонстрирует как this может относиться к текущему типу в цепочке наследования.
// Использование this для typeguards
// Typeguard: Механизм в TypeScript, позволяющий уточнять типы во время выполнения.
// Пример: Создание метода isAdmin в UserBuilder, как typeguard, позволяющий проверять является ли объект экземпляром AdminBuilder.
// Важность уникальности в объектах
// Проблема: Если объекты структурно идентичны, то в run-time их нельзя различить.
// Решение: Гарантировать уникальность свойств или методов в расширяемых классах для корректной работы typeguards.

//-----------------------------------------------


class UserBuilder_515 {
    name: string;

    setName(name: string): this {
        this.name = name;
        return this;
    }

    isAdmin(): this is AdminBuilder_515 {
        return this instanceof AdminBuilder_515;
    }
}

class AdminBuilder_515 extends UserBuilder_515 {
    roles: string[];
}

const res_515 = new UserBuilder_515().setName('Вася');
const res_515_2 = new AdminBuilder_515().setName('Вася');


let user_515: UserBuilder_515 | AdminBuilder_515 = new UserBuilder_515();

if(user_515.isAdmin()) {
    console.log(user_515, '1')
} else {
    console.log(user_515, '2')
}