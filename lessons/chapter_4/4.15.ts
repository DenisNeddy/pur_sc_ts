// Упражнение - Делаем typeguard ответ

// interface IPayment {
//     sum: number;
//     from: number;
//     to: number;
// }

// enum PaymentStatus {
//     Success = 'success',
//     Failed = 'failed',
// }

// interface IPaymentRequest extends IPayment { }

// interface IDataSuccess extends IPayment {
//     databaseId: number;
// }

// interface IDataFailed {
//     errorMessage: string;
//     errorCode: number;
// }

// interface IResponseSuccess {
//     status: PaymentStatus.Success;
//     data: IDataSuccess;
// }

// interface IResponseFailed {
//     status: PaymentStatus.Failed;
//     data: IDataFailed;
// }


//-------------------------------------------------------


// Основные моменты:

// Введение:
// Обсуждается типизация ответа при оплате: успешная (IResponseSuccess) и неуспешная (IResponseFailed).
// Каждый ответ включает статус и данные: успешный ответ содержит информацию о платеже и ID в базе данных, неуспешный – код ошибки.
// Цель лекции:
// Создание и использование TypeGuard для проверки статуса платежа.
// Разработка функции, возвращающей ID из базы данных в случае успешного ответа или генерирующей ошибку при неуспешном.
// Определение Типов:
// Объявление Респонса как Union Type между интерфейсами успешного и неуспешного ответа.
// Создание функции getIdFromData:
// Принимает Респонс указанного типа и возвращает число (ID).
// Используется для обработки и разделения ответов на успешные и неуспешные.
// Работа с TypeGuard:
// Уточнение, что функция isSuccess проверяет, является ли Респонс успешным с помощью поля статус.
// Если статус равен "Success", возвращается true (и наоборот).
// Реализация логики:
// Если переданный Респонс успешен (isSuccess), возвращается ID из данных.
// В случае неуспеха – генерируется ошибка с сообщением из данных ответа.


//-------------------------------------------------------


// enum PaymentStatus {
//     Success = 'success',
//     Failed = 'failed'
// }

// interface IPayment {
//     sum: number,
//     from: number,
//     to: number
// }

// interface IPaymentsRequest extends IPayment {

// }

// interface IDataSuccess extends IPayment {
//     databaseId: number,
// }

// interface IDataFailed {
//     errorMessage: string,
//     errorCode: number
// }

// interface IResponseSuccess {
//     status: PaymentStatus.Success,
//     data: IDataSuccess
// }

// interface IResponseFailed {
//     status: PaymentStatus.Failed,
//     data: IDataFailed
// }


type f = (res: IResponseSuccess | IResponseFailed) => number;
type Res = IResponseSuccess | IResponseFailed;

function isSuccess(res: Res): res is IResponseSuccess {
    if(res.status === PaymentStatus.Success) {
        return true;
    }

    return false;
}

function getIdFromData(res: Res): number {
    if(isSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage)
    }
}