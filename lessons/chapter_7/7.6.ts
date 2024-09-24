//Ограничение generic

//-------------------------------------------------------



// Генерики предоставляют универсальность в работе с разными типами данных, но без определенных ограничений они могут быть менее эффективными.
// Проблема:

// Работа с генериками без ограничений не позволяет обращаться к специфичным для типа свойствам и методам.
// Пример:

// Рассмотрим функцию преобразования километров в мили для автомобиля с определенным пробегом.
// Решение:

// Ограничение Генерика:
// Использование extends позволяет ограничить генерик конкретным базовым классом или интерфейсом. Это позволяет обращаться к свойствам и методам этого базового типа.
// Пример с Классами и Интерфейсами:
// Функция преобразования может быть использована не только для автомобилей, но и для их производных классов, благодаря ограничению генерика базовым классом Vehicle.
// Работа с Примитивными Типами:
// Генерики также могут быть ограничены примитивными типами данных, что расширяет их универсальность и применимость.
// Продвинутое Использование:

// Генерики могут использоваться в комбинациях, позволяя создавать функции и методы с несколькими типизированными параметрами.


//-------------------------------------------------------


interface Vehicle_76 {
    run: number;
}

function kmToMiles_76<T extends Vehicle_76>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}

interface LCV_76 extends Vehicle_76 {
    copacity: number; 
}

kmToMiles_76({run: 1});

function logId<T extends string | number, Y>(id: T, additionalData: Y): {id: T, data: Y} {
    console.log(id);
    console.log(additionalData);
    return {id, data: additionalData};
}