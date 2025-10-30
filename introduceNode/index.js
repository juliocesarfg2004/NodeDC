// console.log(funcaoSoma())

// function somar(n1, n2) {
//     return n1 + n2
// }

// console.log(somar(2, 3));

import express from 'express'
import os from 'os'
import fs from 'fs'
import chalk from 'chalk';


console.log('Sistema operacional', os.platform());
console.log('Usuário', os.userInfo());
console.log('Arquitetura', os.arch());

console.log(chalk.blue('Texto azul'));

fs.writeFileSync('mensagem.txt', 'ZA WARUDO!')
