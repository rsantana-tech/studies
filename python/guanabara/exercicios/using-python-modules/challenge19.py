# Python Exercise 19: A teacher wants to randomly
# choose one of four students to erase the board.
# Write a program that helps by reading the students'
# names and displaying the chosen one on the screen.

import random

n1 = input('Enter the first student\'s name: ')
n2 = input('Enter the second student\'s name: ')
n3 = input('Enter the third student\'s name: ')
n4 = input('Enter the fourth student\'s name: ')

students = [n1, n2, n3, n4]
chosen_student = random.choice(students)

print(f'The chosen student is {chosen_student}.')
