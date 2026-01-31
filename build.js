const fs = require('fs');

const module1 = fs.readFileSync('/Users/noor/Documents/Obsidian Vault/Академия обучения/Новая версия/Модули/Обучение/Модуль_01_О_компании_и_основы.md', 'utf8');
const module2 = fs.readFileSync('/Users/noor/Documents/Obsidian Vault/Академия обучения/Новая версия/Модули/Обучение/Модуль_02_Категории_часть_1.md', 'utf8');

// Escape backticks and template literals
const escapeMarkdown = (md) => md.replace(/`/g, '\\`').replace(/\$/g, '\\$');

const template = fs.readFileSync('index.html', 'utf8');
const final = template
    .replace('MARKDOWN_MODULE_1', escapeMarkdown(module1))
    .replace('MARKDOWN_MODULE_2', escapeMarkdown(module2));

fs.writeFileSync('index-final.html', final);
console.log('✅ HTML создан: index-final.html');
