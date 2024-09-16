"use strict";
// Массив
const skills = ['Dev', 'DevOps', 'Testing'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
skills.filter(s => s !== 'Devops');
