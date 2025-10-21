# Python Exercise 17: Write a program that reads the
# lengths of the opposite and adjacent sides of a right
# triangle, then calculates and displays the length of
# the hypotenuse.

import math

opposite = float(input('Enter the length of the opposite side (cm): '))
adjacent = float(input('Enter the length of the adjacent side (cm): '))
hypotenuse = math.hypot(opposite, adjacent)

print(f'The hypotenuse of the sides {opposite:.2f}cm and {adjacent:.2f}cm is {hypotenuse:.2f}cm.')
