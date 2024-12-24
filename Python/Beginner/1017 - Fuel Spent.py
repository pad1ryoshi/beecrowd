car = 12

speed_time = int(input())
average_speed = int(input())
distance = speed_time * average_speed
liters_needed = distance / car

print('{:.3f}'.format(liters_needed))
