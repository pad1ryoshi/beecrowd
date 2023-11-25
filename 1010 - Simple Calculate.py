p1_code, p1_units, p1_price = input().split() 
p2_code, p2_units, p2_price = input().split()

p1_code = int(p1_code)
p1_units = int(p1_units)
p1_price = float(p1_price)
p2_code = int(p2_code)
p2_units = int(p2_units)
p2_price = float(p2_price)

value_to_pay = (p1_units * p1_price) + (p2_units * p2_price)

print('VALOR A PAGAR: R$ {:.2f}'.format(value_to_pay))
