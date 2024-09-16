// Tuples (Кортежи)

const mySkill: [number, string ] = [1, 'Dev'];

const id = mySkill[0];
const skillName = mySkill[1];
// const some = mySkill[2];

mySkill.push('что-нибудь');
// Но все равно обратиться к элементу с идексом больше 1 нельзя, 
// Кортеж не может быть больше двух элементов


const someArr_38: [number, string, ...boolean[]] = [1, 'sdf', true, true, true]