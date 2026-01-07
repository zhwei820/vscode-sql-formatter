'use strict';

const Tokenizer = require('./src/sql-formatter-plus/src/core/Tokenizer');

const tokenizer = new Tokenizer({
  reservedWords: [],
  reservedTopLevelWords: [],
  reservedNewlineWords: [],
  reservedTopLevelWordsNoIndent: [],
  stringTypes: [`""`, "N''", "''", '``', '[]'],
  openParens: ['(', 'CASE'],
  closeParens: [')', 'END'],
  indexedPlaceholderTypes: ['?'],
  namedPlaceholderTypes: ['@', ':'],
  lineCommentTypes: ['#', '--'],
  specialWordChars: []
});

console.log('Test 1: Just ">="');
let tokens = tokenizer.tokenize('>=');
tokens.forEach((t, i) => console.log(`  ${i}: [${t.type}] "${t.value}"`));

console.log('\nTest 2: "x >= y"');
tokens = tokenizer.tokenize('x >= y');
tokens.forEach((t, i) => console.log(`  ${i}: [${t.type}] "${t.value}"`));

console.log('\nTest 3: "x>= y" (no space before)');
tokens = tokenizer.tokenize('x>= y');
tokens.forEach((t, i) => console.log(`  ${i}: [${t.type}] "${t.value}"`));

console.log('\nTest 4: "x >=y" (no space after)');
tokens = tokenizer.tokenize('x >=y');
tokens.forEach((t, i) => console.log(`  ${i}: [${t.type}] "${t.value}"`));

console.log('\nTest 5: ">= <Parameters.start_date>"');
tokens = tokenizer.tokenize('>= <Parameters.start_date>');
tokens.forEach((t, i) => console.log(`  ${i}: [${t.type}] "${t.value}"`));

console.log('\nTest 6: "x >= <Parameters.start_date>"');
tokens = tokenizer.tokenize('x >= <Parameters.start_date>');
tokens.forEach((t, i) => console.log(`  ${i}: [${t.type}] "${t.value}"`));