a, b, c = input().split()
a, b, c = int(a), int(b), int(c)

maiorAB = (a+b+abs(a-b))/2
maiorABC = (c+maiorAB+abs(c-maiorAB))/2

print('{:.0f} eh o maior'.format(maiorABC))
