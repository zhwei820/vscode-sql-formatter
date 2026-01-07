'use strict';

const sqlFormatter = require('./src/sql-formatter-plus');

const sql = `with records as (
    select
        *
    from
        collateral_lending.orders
        inner join (
            select
                x.*
            from
                collateral_lending.interest_records x
            where
                x.timestamp_milli < ifnull(y.min_timestamp_milli,1e18)  ) interest_records 
                
                on 
        
    1 and interest_records.timestamp_milli >= (unix_timestamp(<Parameters.start_date>)) * 1000
                and interest_records.timestamp_milli <  unix_timestamp(<Parameters.end_date(exclude)>
        ) * 1000
)`;

console.log('Original SQL:');
console.log(sql);
console.log('\n\n' + '='.repeat(80) + '\n');
console.log('Formatted SQL:');

const formatted = sqlFormatter.format(sql, {
  language: 'sql'
});

console.log(formatted);

// Check if ">=" got split
if (formatted.includes('> =')) {
  console.log('\n\n❌ ERROR: ">=" was split into "> ="');
} else if (formatted.includes('>=')) {
  console.log('\n\n✓ OK: ">=" remains intact');
} else {
  console.log('\n\n? ">=" not found in formatted output');
}