with records as (
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
)