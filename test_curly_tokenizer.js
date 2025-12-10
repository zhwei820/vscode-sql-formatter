const Tokenizer = require('./src/sql-formatter-plus/src/core/Tokenizer');

// Create a tokenizer instance with basic config
const tokenizer = new Tokenizer({
  reservedWords: ['SELECT', 'FROM', 'WHERE', 'AND'],
  reservedTopLevelWords: ['SELECT', 'FROM', 'WHERE'],
  reservedNewlineWords: ['AND', 'OR'],
  reservedTopLevelWordsNoIndent: [],
  stringTypes: ["''", '""'],
  openParens: ['('],
  closeParens: [')'],
  indexedPlaceholderTypes: ['?'],
  namedPlaceholderTypes: [':', '@'],
  lineCommentTypes: ['--'],
  specialWordChars: ['_']
});

// Test SQL with {{ }} brackets
const testSQL = `SELECT {{user_name}}, {{email}}, <param>, 在贷余额$ FROM users WHERE id = {{user_id}}`;

console.log('Testing SQL:', testSQL);
console.log('\nTokens:');

const tokens = tokenizer.tokenize(testSQL);
tokens.forEach((token, index) => {
  console.log(`${index}: [${token.type}] "${token.value}"`);
});

// Verify preserved content tokens
console.log('\n--- Preserved Content Tokens ---');
const preservedTokens = tokens.filter(t => t.type === 'preserved-content');
preservedTokens.forEach(token => {
  console.log(`✓ Preserved: "${token.value}"`);
});

console.log(`\nTotal preserved tokens: ${preservedTokens.length}`);
console.log('Expected: 4 ({{user_name}}, {{email}}, <param>, 在贷余额$)');
