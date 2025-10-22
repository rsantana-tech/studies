# Create an algorithm that reads a number and
# displays its double, triple, and square root.

number = int(input('Choose aN integer number: '))
double = number * 2
triple = number * 3
square_root = number**(1/2)
print(f"""
The number you chose is {number}
The double is {double}
The triple is {triple}
The square root is {square_root:.2f}
""")
