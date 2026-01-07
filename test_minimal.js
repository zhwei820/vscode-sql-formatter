'use strict';

const Tokenizer = require('./src/sql-formatter-plus/src/core/Tokenizer');

const tokenizer = new Tokenizer({
  reservedWords: [],
  reservedTopLevelWords: [],
  reservedNewlineWords: [],
  reservedTopLevelWordsNoIndent: [],
  stringTypes: [],
  openParens: ['('],
  closeParens: [')'],
  indexedPlaceholderTypes: [],
  namedPlaceholderTypes: [],
  lineCommentTypes: [],
  specialWordChars: []
});

const testInputs = [
  '>=',
  '> =',
  'x',
  'x '
];

testInputs.forEach(input => {
  console.log(`\nTokenizing: "${input}"`);
  try {
    const tokens = tokenizer.tokenize(input);
    tokens.forEach((t, i) => console.log(`  ${i}: [${t.type}] "${t.value}"`));
  } catch (e) {
    console.log(`  ERROR: ${e.message}`);
  }
});