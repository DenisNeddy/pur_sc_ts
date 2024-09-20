"use strict";
// Extends
class Payment_58 {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistentPayment_58 extends Payment_58 {
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
// new Payment_58()
// new PersistentPayment_58().
