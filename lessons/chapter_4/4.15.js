"use strict";
// Упражнение - Делаем typeguard ответ
function isSuccess(res) {
    if (res.status === PaymentStatus.Success) {
        return true;
    }
    return false;
}
function getIdFromData(res) {
    if (isSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
