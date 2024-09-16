// Интефейсы

interface User_45 {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string;
}

interface Role_45 {
    roleId: number
}

interface UserWithRole_45 extends User_45, Role_45 {
    createdAt: Date
}

let user_45: UserWithRole_45 = {
    name: 'Фод',
    age: 33,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),

    log(id) {
        return '';
    }
}