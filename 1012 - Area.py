PI = 3.14159

a, b, c = input().split()
a, b, c = float(a), float(b), float(c)

area_rectangled_triangle = (a*c) / 2
area_radius_c = PI * (c*c)
area_trapezium = ((a+b) * c) / 2
area_square = b * b
area_rectangle = a * b

print('TRIANGULO: {:.3f}'.format(area_rectangled_triangle))
print('CIRCULO: {:.3f}'.format(area_radius_c))
print('TRAPEZIO: {:.3f}'.format(area_trapezium))
print('QUADRADO: {:.3f}'.format(area_square))
print('RETANGULO: {:.3f}'.format(area_rectangle))
