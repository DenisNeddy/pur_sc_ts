"use strict";
// Enum - тип данных
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
    StatusCode["UNKNOW_STATUS"] = "something";
})(StatusCode || (StatusCode = {}));
const res__310 = {
    message: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS
};
// 1 - Успех
// 2 - В процессе
// 3 - Отклонен
if (res__310.statusCode === StatusCode.SUCCESS) {
}
// Какой то случай
function action(status) {
}
action(StatusCode.SUCCESS);
action(1); // статус SUCCESS 
