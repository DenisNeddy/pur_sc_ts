"use strict";
// Методы Класса
//---------------------------------------------------------------
// Структура класса "Payment"
// Определение класса: Создаём класс Payment для моделирования процесса платежа.
// Атрибуты класса:
// id: Идентификатор платежа (число).
// status: Статус платежа, управляемый через enum (holded, processed, reversed).
// createdAtData и updatedAtData: Даты создания и обновления статуса платежа.
// Конструктор: Принимает идентификатор платежа и задаёт начальные значения атрибутов.
// Работа с методами
// Определение метода: Методы класса - функции, выполняющие операции над атрибутами экземпляра.
// Пример методов:
// getPaymentLifetime(): Вычисляет время жизни платежа в миллисекундах.
// unholdPayment(): Меняет статус платежа с holded на reversed и обновляет дату обновления, если это возможно.
// Инкапсуляция и изменение объектов
// Приватные свойства и инкапсуляция: Показано, как методы позволяют взаимодействовать с атрибутами объекта, защищая его от непосредственных изменений извне и поддерживая инкапсуляцию.
// Пример использования
// Создание экземпляра платежа с определённым идентификатором.
// Использование метода для изменения статуса с holded на reversed.
// Вычисление времени существования платежа.
//---------------------------------------------------------------
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.status = PaymentStatus.Holded;
        this.createdAt = new Date();
        this.id = id;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Платеж не может быть возвращен');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const payment = new Payment(1);
payment.unholdPayment();
const time = payment.getPaymentLifeTime();
