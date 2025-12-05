'use strict';

const sqlFormatter = require('./src/sql-formatter-plus');

const testSQL = 'SELECT 在贷余额$, name, 贷款总额$, amount FROM users WHERE id = 1';

console.log('Original SQL:');
console.log(testSQL);
console.log('\nFormatted SQL:');
console.log(sqlFormatter.format(testSQL, { indent: '  ' }));

// Test with uppercase option
console.log('\nFormatted SQL (uppercase):');
console.log(sqlFormatter.format(testSQL, { indent: '  ', uppercase: true }));
