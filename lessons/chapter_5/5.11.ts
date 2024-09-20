// Видимость свойств

//-------------------------------------------------

// Ключевые понятия:
// Public: Свойство/метод доступен из любого места. По умолчанию все свойства и методы публичны.
// Private: Доступ к свойству/методу возможен только внутри класса.
// Protected: Похож на private, но также доступен в классах-наследниках.
// Private в TypeScript vs. JavaScript: В TypeScript private ограничивает доступ на этапе компиляции, в то время как в JavaScript используется специальная нотация (через #) для обеспечения приватности на уровне языка.
// Примеры:
// Public:typescript class Vehicle { public make: string; } const car = new Vehicle(); car.make = 'BMW'; // Доступно для изменения
// Создание экземпляра класса и прямое присваивание значения публичному свойству.
// Private:typescript class Vehicle { private damage: string[]; addDamage(damage: string) { this.damage.push(damage); } }
// Ограничение доступа к свойству только внутри класса. Модификация возможна через методы класса.
// Protected:```typescript class Vehicle { protected mileage: number; }

// class EuroTruck extends Vehicle { setMileage(miles: number) { this.mileage = miles; } } ```

// Свойства доступны внутри класса и в классах-наследниках.
// Private в JavaScript:```typescript class Vehicle {

// price: number;
// } const car = new Vehicle(); // car.#price = 100; // Ошибка, недоступно извне ```

// Приватные поля с нотацией # недоступны извне класса.
// Важные моменты:
// Ключевое слово private используется в TypeScript для обозначения приватности на этапе компиляции.
// JavaScript поддерживает собственное обозначение приватных полей через #, делая их недоступными в скомпилированном коде.
// Использование модификатора доступа (private, protected, public) зависит от контекста разработки (backend/frontend) и требований к безопасности данных.
// Применение:
// В backend-разработке предпочтительнее использовать private за ненадобностью защиты от внешнего доступа.
// В frontend-разработке для защиты данных от внешних скриптов можно использовать # для создания истинно приватных полей.

//-------------------------------------------------


class Vehicle_511 {
    public make: string;
    private damages: string[];
    private _model: string;
    protected run: number

    set model(m: string) {
        this._model = m;
    }

    get model() {
        return this._model;
    }

    addDamage(damage: string) {
        this.damages.push(damage);
    }

    private addDamage2(damage: string) {
        this.damages.push(damage);
    }
}

class EuroTruck_511 extends Vehicle_511 {
    setDamage(km: number) {
       this.run = km / 0.62 // а тут есть доступ к run
    }
}

new Vehicle_511().make = 'd' // тут нет доступа к run