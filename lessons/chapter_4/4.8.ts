// 4.8. Упражнение - Типизируем ответ сервера

//-------------------------------------------

// Цели:
// Освоить создание интерфейсов для запросов и ответов API
// Научиться использовать union types и наследование
// Содержание:
// Введение:

// От объектных типов к интерфейсам
// Практический пример: API для перевода средств
// Определение задачи:

// Создать интерфейс для запроса перевода средств (IPaymentsRequest) и ответа API
// Разработка интерфейсов:

// IPaymentsRequest:
// Основан на сущности платежа IPayment
// Содержит атрибуты: сумма (sum), отправитель (from), получатель (to)
// Ответ API:
// Разработка двух типов ответов: успешный (IResponseSuccess) и неуспешный (IResponseFailed)
// Использование enum для статусов ответа (PaymentStatus): success или failed
// Примеры данных для успешного и неуспешного ответов
// Продвинутые техники типизации:

// Объяснение и использование union types для ответа API
// Пример наследования интерфейсов
// Рефакторинг и улучшения:

// Разделение интерфейс ответа на IResponseSuccess и IResponseFailed для четкого соответствия типам ответа
// Демонстрация, как неправильный подход к типизации может усложнить последующую работу с типами
// Введение концепта Type Guards для разделения типов ответа в будущем использовании

//-------------------------------------------

// Запрос в виде платежа

// {
//     "sum": 10000,
//     "from": 2,
//     "to": 4
// }
// // Ответ
// {
//     "status": "success",
//     "data": {
//         "databaseId": 567,
//         "sum": 10000,
//         "from": 2,
//         "to": 4
//     }
// },
// {
//     "status": "failed",
//     "data": {
//         "errorMessage": "Недостаточно средств",
//         "errorCode": 4
//     }
// }

//-------------------------------------------


enum PaymentStatus {
    Success = 'success',
    Failed = 'failed'
}

interface IPayment {
    sum: number,
    from: number,
    to: number
}

interface IPaymentsRequest extends IPayment {

}

interface IDataSuccess extends IPayment {
    databaseId: number,
}

interface IDataFailed {
    errorMessage: string,
    errorCode: number
}

interface IResponseSuccess {
    status: PaymentStatus.Success,
    data: IDataSuccess
}

interface IResponseFailed {
    status: PaymentStatus.Failed,
    data: IDataFailed
}

// Функция возвращает один из двух ответов IResponseSuccess | IResponseSuccess

// function getSomething(): IResponseSuccess | IResponseSuccess {

// }