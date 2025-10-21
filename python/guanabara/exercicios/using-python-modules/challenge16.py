# Python Exercise 16: Create a program that reads
# any real number from the keyboard and displays
# its integer portion on the screen.

from math import trunc

real_number = float(input('Enter a real number: '))
print(f'The integer part of {real_number} is {trunc(real_number)}')
