def format_payments(payment_data):
    payments = []
    for row in payment_data:
        payment = {
            "id": row[0],
            "payment_amount": row[1],
            "payment_date": row[2],
            "title": row[3],
            "user_email": row[4],
        }
        payments.append(payment)

    return payments
