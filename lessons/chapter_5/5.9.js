"use strict";
// Особенности наследования
class Payment_59 {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistentPayment_59 extends Payment_59 {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        // Сохраняет базу
    }
    pay(date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
class User_59 {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class Admin_59 extends User_59 {
    constructor() {
        super(...arguments);
        this.name = 'adimin';
    }
}
new Admin_59(); // имя будет user, так как родительский класс инициализируется первым 
