'use strict';

// Simple regex test to verify the OPERATOR_REGEX pattern
const OPERATOR_REGEX = /^(!=|<>|==|<=|>=|!<|!>|\|\||::|->>|->|~~\*|~~|!~~\*|!~~|~\*|!~\*|!~|:=|.)/u;

console.log('Testing OPERATOR_REGEX with ">="');
const testString = '>=';
const match = testString.match(OPERATOR_REGEX);
console.log('Input:', testString);
console.log('Match result:', match);
console.log('Matched value:', match ? match[1] : 'no match');

console.log('\n\nTesting with ">" alone:');
const testString2 = '>';
const match2 = testString2.match(OPERATOR_REGEX);
console.log('Input:', testString2);
console.log('Match result:', match2);
console.log('Matched value:', match2 ? match2[1] : 'no match');

console.log('\n\nTesting the order of matches:');
const operators = ['>=', '<=', '!=', '<>', '>', '<', '='];
operators.forEach(op => {
  const m = op.match(OPERATOR_REGEX);
  console.log(`"${op}" matches as: "${m ? m[1] : 'no match'}"`);
});