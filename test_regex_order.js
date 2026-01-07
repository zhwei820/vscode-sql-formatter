'use strict';

// Test if the order of alternatives in the regex matters

const OPERATOR_REGEX_ORIGINAL = /^(!=|<>|==|<=|>=|!<|!>|\|\||::|->>|->|~~\*|~~|!~~\*|!~~|~\*|!~\*|!~|:=|.)/u;

// Note: The `.` at the end matches ANY single character
// Let's see if it interferes with multi-character operators

console.log('Testing OPERATOR_REGEX with different inputs:\n');

const testInputs = [
  '>=',
  '> =',
  '<=',
  '< =',
  '<>',
  '< >',
  '>',
  '<',
  '='
];

testInputs.forEach(input => {
  const match = input.match(OPERATOR_REGEX_ORIGINAL);
  console.log(`"${input}" -> matches: "${match ? match[1] : 'no match'}"`);
});

console.log('\n' + '='.repeat(60));
console.log('Testing if `.` wildcard interferes:');
console.log('='.repeat(60) + '\n');

// The `.` should only match if nothing else matches
// But regex engines match alternatives left-to-right
// So `>=` should match before `.` can match just `>`

const testString = '>=';
const match = testString.match(OPERATOR_REGEX_ORIGINAL);
console.log(`Input: "${testString}"`);
console.log(`Match: "${match[1]}"`);
console.log(`Match length: ${match[1].length}`);
console.log(`Full match index: ${match.index}`);

// Now let's test step-by-step tokenization
console.log('\n' + '='.repeat(60));
console.log('Step-by-step tokenization of "> ="');
console.log('='.repeat(60) + '\n');

let input = '> =';
let step = 0;
while (input.length > 0) {
  step++;
  
  // Skip whitespace
  let wsMatch = input.match(/^(\s+)/u);
  if (wsMatch) {
    console.log(`Step ${step}: WHITESPACE "${wsMatch[1]}"`);
    input = input.substring(wsMatch[1].length);
    continue;
  }
  
  // Match operator
  let opMatch = input.match(OPERATOR_REGEX_ORIGINAL);
  if (opMatch) {
    console.log(`Step ${step}: OPERATOR "${opMatch[1]}"`);
    input = input.substring(opMatch[1].length);
    continue;
  }
  
  console.log(`Step ${step}: NO MATCH for "${input}"`);
  break;
}