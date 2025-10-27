# Python Exercise 30: Create a program that
# reads an integer and displays on the screen
# whether it is even or odd.


number_int = int(input('Enter an integer number: '))
if (number_int % 2) == 0:
    print(f'The number {number_int} is even')
else:
    print(f'The number {number_int} is odd')