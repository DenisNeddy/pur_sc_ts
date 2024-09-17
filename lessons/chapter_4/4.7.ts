//  Optional

// -----------------------------------

// Опциональные свойства в интерфейсах и типах:
// Для обозначения опционального свойства используется знак вопроса (?) перед двоеточием.
// Пример: интерфейс пользователя с обязательным логином и опциональным паролем.
// Отличие от Union Type (string | undefined): знак вопроса позволяет свойству отсутствовать, в то время как Union Type требует наличия свойства, даже если его значение undefined.
// Опциональные параметры функции:
// Аналогично, опциональность параметра в функции обозначается знаком вопроса.
// Пример: функция multiply, где второй параметр необязателен.
// Если опциональный параметр отсутствует, можно задать дефолтное значение, убрав знак вопроса и указав значение (= 5).
// Опциональность в объектах и Optional Chaining:
// Optional Chaining (?.) позволяет безопасно обращаться к свойствам, которые могут быть неопределенными, без ошибки выполнения.
// Осуществляется подстановкой ? перед оператором доступа к свойству.
// Пример: user.password?.type безопасно вернет тип или undefined, если объект password отсутствует.
// Non-null Assertion Operator (!):
// Используется, когда разработчик уверен, что значение определено и не null/undefined.
// Пример: user.password!.type подразумевает, что password точно существует и имеет свойство type.
// Рекомендуется использовать с осторожностью.
// Nullish Coalescing (??):
// Позволяет задать значение по умолчанию для null или undefined.
// Пример: param ?? multiply(5) возвращает param, если он не null/undefined, иначе результат multiply(5).

// -----------------------------------

interface User_47 {
    login: string, 
    password?: string 
}

// Такая запись не сработает см.ниже. Опциональный оператор позволяет параметру не быть
// interface User_47 {
//     login: string, 
//     password: string | undefined
// }


const user_47: User_47 = {
    login: 'ya@ya.ru',
}

type User_47_1 = {
    login: string, 
    password?: string
}

const user_47_1: User_47_1 = {
    login: 'sdfga'
}

function multiply(first: number, second?: number): number {
    if(!second) {
        return first * first;
    }
    return first * second;
}

interface UserPro_47 {
    login: string,
    password?: {
        type: 'primary' | 'secondary'
    }
}

function testPass_47(user: UserPro_47) {
    const t = user.password?.type; // EDC сама правильно подставляет оператор вопроса, который говорит, что если пароль будет, то у него будет один их двух литеральных типов primery или secondary

    // const t = user.password ? user.password.type : undefined; - альтернатива

}

// Nullish Coalescing (??):

function test_47(param?: string) {
    const p = param ?? 'что то другое вызвать, если нет param';
}