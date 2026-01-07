'use strict';

// Test to see if PRESERVED_CONTENT_REGEX interferes with operators

const PRESERVED_CONTENT_REGEX = /^(<[^>]+>|\{\{[^}]*\}\})/u;
const OPERATOR_REGEX = /^(!=|<>|==|<=|>=|!<|!>|\|\||::|->>|->|~~\*|~~|!~~\*|!~~|~\*|!~\*|!~|:=|.)/u;

console.log('Testing various inputs:\n');

const testCases = [
  '>=',
  '> =',
  '>= <Parameters.start>',
  '> = <Parameters.start>',
  '<Parameters.start>',
  '> <Parameters.start>',
];

testCases.forEach(input => {
  console.log(`Input: "${input}"`);
  
  const preservedMatch = input.match(PRESERVED_CONTENT_REGEX);
  console.log(`  PRESERVED_CONTENT_REGEX: ${preservedMatch ? `"${preservedMatch[1]}"` : 'no match'}`);
  
  const operatorMatch = input.match(OPERATOR_REGEX);
  console.log(`  OPERATOR_REGEX: ${operatorMatch ? `"${operatorMatch[1]}"` : 'no match'}`);
  
  console.log('');
});

// Now let's simulate tokenization step by step
console.log('='.repeat(60));
console.log('Simulating tokenization of: "x >= <Parameters.start>"');
console.log('='.repeat(60));

let remaining = 'x >= <Parameters.start>';
let step = 0;

while (remaining.length > 0) {
  step++;
  console.log(`\nStep ${step}: remaining = "${remaining}"`);
  
  // Try whitespace
  let match = remaining.match(/^(\s+)/u);
  if (match) {
    console.log(`  -> WHITESPACE: "${match[1]}"`);
    remaining = remaining.substring(match[1].length);
    continue;
  }
  
  // Try preserved content
  match = remaining.match(PRESERVED_CONTENT_REGEX);
  if (match) {
    console.log(`  -> PRESERVED_CONTENT: "${match[1]}"`);
    remaining = remaining.substring(match[1].length);
    continue;
  }
  
  // Try operator  
  match = remaining.match(OPERATOR_REGEX);
  if (match) {
    console.log(`  -> OPERATOR: "${match[1]}"`);
    remaining = remaining.substring(match[1].length);
    continue;
  }
  
  // Try word
  match = remaining.match(/^([\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]+)/u);
  if (match) {
    console.log(`  -> WORD: "${match[1]}"`);
    remaining = remaining.substring(match[1].length);
    continue;
  }
  
  console.log('  -> ERROR: No match found!');
  break;
}