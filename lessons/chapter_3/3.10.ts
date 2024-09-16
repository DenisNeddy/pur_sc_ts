// Enum - тип данных


enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS,
    FAILED,
    UNKNOW_STATUS = 'something'
}
const res__310 = {
    message: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS
}

// 1 - Успех
// 2 - В процессе
// 3 - Отклонен


if(res__310.statusCode === StatusCode.SUCCESS) {

}

// Какой то случай

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS);
action(1); // статус SUCCESS 

const enum Roles_310 {
    ADMIN = 1,
    USER = 2
}
// Константы, которые подставляются в нужные места , где используются

