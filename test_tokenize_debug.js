'use strict';

const StandardSqlFormatter = require('./src/sql-formatter-plus/src/languages/StandardSqlFormatter');

const formatter = new StandardSqlFormatter();
const tokenizer = formatter.tokenizer;

const sql = 'timestamp_milli >= (unix_timestamp(<Parameters.start_date>))';

console.log('Testing SQL:', sql);
console.log('\nTokens:');

const tokens = tokenizer.tokenize(sql);
tokens.forEach((token, idx) => {
  console.log(`${idx}: type="${token.type}", value="${token.value}"`);
});

console.log('\n\nSpecific test for ">=" alone:');
const geTokens = tokenizer.tokenize('>=');
geTokens.forEach((token, idx) => {
  console.log(`${idx}: type="${token.type}", value="${token.value}"`);
});

console.log('\n\nTest with space before:');
const spaceGeTokens = tokenizer.tokenize(' >=');
spaceGeTokens.forEach((token, idx) => {
  console.log(`${idx}: type="${token.type}", value="${token.value}"`);
});

console.log('\n\nTest the sequence "x >= y":');
const seqTokens = tokenizer.tokenize('x >= y');
seqTokens.forEach((token, idx) => {
  console.log(`${idx}: type="${token.type}", value="${token.value}"`);
});