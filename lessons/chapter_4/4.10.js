"use strict";
// Тип Uncknown
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//---------------------------------------
// Введение в Unknown
// Unknown — тип, существующий только в TypeScript.
// Представляет значение неизвестного типа.
// Отличается от Any, предоставляя большую строгость и безопасность типов.
// Сравнение Unknown и Any
// Any:
// Отменяет проверки типов, позволяя присваивать значение любого типа.
// Не рекомендуется к использованию из-за отсутствия типовой безопасности.
// Unknown:
// Требует явного приведения или проверки типов перед использованием.
// Гарантирует строгость типов, делая код безопаснее.
// Работа с Unknown
// Пример: Присвоение Unknown значения другим переменным требует явного указания или проверки типа.
// Unknown можно безопасно присвоить переменной типа Unknown или Any.
// Практическое применение
// Обработка ошибок в блоках try-catch:
// С TypeScript 4.4 тип ошибок в catch изменился с Any на Unknown.
// Требуется явная проверка типа ошибки перед использованием.
// Приведение типов и проверка типов
// Используйте приведение типов (например, as Error) только когда абсолютно уверены в типе значения.
// Рекомендуется использовать проверку типа (например, instanceof Error) для идентификации типа перед доступом к свойствам.
// Интеракция Unknown с другими типами
// Union (|) с Unknown: результирующий тип всегда будет Unknown.
// Intersection (&) с Unknown: результирующий тип будет другим типом из пересечения.
// Рекомендации
// Используйте Unknown вместо Any когда не уверены в типе входных данных, это повысит безопасность вашего кода.
// Проводите явную проверку типов, когда работаете с Unknown, чтобы избежать возможных ошибок выполнения.
//---------------------------------------
let input_410;
input_410 = 3;
input_410 = ['sf', 'sdf'];
// let res_410: string = input_410; Так нельзя, можно только если res ее тип any или unknown
function run_410(i) {
    if (typeof i == 'number') {
        i++;
    }
    else {
        i;
    }
}
run_410(input_410);
// Кейс на практике
function getData_410() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    });
}
// Кейс сверху более предпочтительней чем снизу, так как там при ошибке 
// приложение не рухнет, а вот в нижнем кейсе если Error не ошибка, то 
// приложение сломается(то есть мы в этом варианте уверены, все пойдет по нашему сценарию)
function getDataforce_410() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) {
            const e = error;
            console.log(e.message);
        }
    });
}
