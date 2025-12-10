-- Test SQL with {{ }} preserved fields
SELECT
    user_id,
    {{user_name}},
    {{email_address}},
    created_at,
    {{custom_field}}
FROM
    users
WHERE
    status = 'active'
    AND {{dynamic_condition}}
    AND age > 18;

-- Test with mixed preserved content
SELECT
    <param.start_date>,
    {{end_date}},
    在贷余额$,
    normal_field
FROM
    transactions
WHERE
    transaction_id = {{trans_id}}
    AND amount > <threshold>;