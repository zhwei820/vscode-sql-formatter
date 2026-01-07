'use strict';

const Tokenizer = require('./src/sql-formatter-plus/src/core/Tokenizer.js');

// Create a simple tokenizer configuration
const cfg = {
  reservedWords: [],
  reservedTopLevelWords: [],
  reservedNewlineWords: [],
  reservedTopLevelWordsNoIndent: [],
  stringTypes: ["''", '""'],
  openParens: ['('],
  closeParens: [')'],
  indexedPlaceholderTypes: [],
  namedPlaceholderTypes: [],
  lineCommentTypes: ['--'],
  specialWordChars: []
};

const tokenizer = new Tokenizer(cfg);

// Test the problematic SQL
const sql = 'interest_records.timestamp_milli >= (unix_timestamp(<Parameters.start_date>)) * 1000';

console.log('Testing SQL:', sql);
console.log('\nTokens:');

const tokens = tokenizer.tokenize(sql);
tokens.forEach((token, idx) => {
  console.log(`${idx}: type="${token.type}", value="${token.value}"`);
});

// Test just the operator
console.log('\n\nTesting just ">=" operator:');
const geTokens = tokenizer.tokenize('>=');
geTokens.forEach((token, idx) => {
  console.log(`${idx}: type="${token.type}", value="${token.value}"`);
});

// Test with space before
console.log('\n\nTesting " >=" with space before:');
const spaceGeTokens = tokenizer.tokenize(' >=');
spaceGeTokens.forEach((token, idx) => {
  console.log(`${idx}: type="${token.type}", value="${token.value}"`);
});