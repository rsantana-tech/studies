# Python Exercise 28: Write a program that makes the computer
# “think” of an integer between 0 and 5 and asks the user to try
# to guess which number was chosen. The program should display
# on the screen whether the user won or lost.

import random

number_pc = random.randint(0,5)
number_user = int(input('Enter a number between 0 and 5: '))

if number_pc == number_user:
    print(f'Congratulations! You matched the number!')
else:
    print(f'Sorry, you lose! The computer chose {number_pc}.')
