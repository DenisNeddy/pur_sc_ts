// Упражнение - Делаем абстрактный logger

//----------------------------------------

// Создание абстрактного класса Logger
// Объявление абстрактного класса:
// Абстрактный класс Logger содержит методы для логирования информации.
// Используется ключевое слово abstract для объявления.
// Абстрактный метод log:
// Метод log(message: string): void определен как абстрактный и предназначен для переопределения в классах-наследниках.
// Отвечает за сам процесс логирования.
// Метод printDate:
// Неабстрактный метод printDate(date: Date): void логирует дату.
// Использует абстрактный метод log для вывода даты, показывая в примере использование абстрактного метода в конкретной реализации.
// Реализация класса-наследника MyLogger
// Наследование от Logger:
// Класс MyLogger наследуется от абстрактного класса Logger.
// Переопределяет абстрактный метод log, используя console.log для вывода сообщения.
// Метод logWithDate:
// Дополнительный метод logWithDate(message: string): void для лога с датой.
// Сначала вызывает printDate для вывода текущей даты, затем логирует сообщение через переопределенный метод log.
// Пример использования
// Создание экземпляра MyLogger и вызов logWithDate для демонстрации работы системы логирования с датой.

//----------------------------------------

abstract class Logger {
    abstract log(message: string):void;

    printDate(date: Date):void {
        this.log(date.toString());
    }
}

class MyLogger extends Logger {
    log(message:string): void {
        console.log(message);
    }

    logWithDate(message: string):void {
        this.printDate(new Date);
        this.log(message)
    }
}

const logger = new MyLogger();
logger.logWithDate('Тратата');