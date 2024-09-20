"use strict";
// Упражнение - Делаем корзину товаров
//---------------------------------------------------
// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery). Для Cart реализовать методы:
// Добавить продукт в корзину
// Удалить продукт из корзины по ID
// Посчитать стоимость товаров в корзине
// Задать доставку
// Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
// Конспект
// Комментарии
// 5
// Цель упражнения: Понять, как создавать классы, использовать наследование и композицию для реализации функциональности веб-корзины.
// Задача:
// Создать классы для продуктов, способов доставки и корзины пользователей.
// Реализовать методы для добавления/удаления товаров, расчета общей стоимости и установки параметров доставки.
// Классы и их методы:
// Продукт (Product):
// Атрибуты: идентификатор (id), наименование (title), цена (price).
// Доставка (Delivery):
// Базовый класс с атрибутом дата (date).
// Два производных класса:
// Доставка домой (HomeDelivery) с атрибутами дата и адрес.
// Доставка в магазин (ShopDelivery) с атрибутами дата и идентификатор магазина.
// Корзина (Cart):
// Атрибуты: список продуктов (products), способ доставки (delivery).
// Методы:
// addProduct(): добавить продукт.
// deleteProduct(): удалить продукт по идентификатору.
// getSum(): рассчитать стоимость товаров в корзине.
// setDelivery(): установить способ доставки.
// checkout(): проверить наличие товаров и способ доставки, инициировать покупку.
// Процесс реализации:
// Реализация классов:
// Продукт и доставка создаются с помощью конструкторов и атрибутов.
// Описаны основные и производные классы доставки с использованием наследования (extends).
// Композиция использована в корзине, объединяя продукты и способы доставки.
// Использование классов:
// Создание экземпляров продуктов и способов доставки.
// Иллюстрация использования методов корзины: добавление продуктов, установка доставки, расчет суммы и инициация покупки.
//---------------------------------------------------
class Product_512 {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery_512 {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery_512 extends Delivery_512 {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery_512 extends Delivery_512 {
    constructor(date, shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((acc, price) => acc + price, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length === 0) {
            console.error('Нет товаров');
        }
        if (!this.delivery) {
            console.error('Не указан способ доставки');
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product_512(1, 'Pechenka', 10));
cart.addProduct(new Product_512(2, 'morozhenka', 110));
cart.addProduct(new Product_512(2, 'morozhenka', 60));
cart.deleteProduct(1);
// cart.setDelivery(new HomeDelivery_512(new Date(), ''))
console.log(cart.getSum());
console.log(cart.checkOut());
