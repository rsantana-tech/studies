# Exercise 4 – Dissecting a Variable
# Python 4 Exercise: Write a program that reads something from the keyboard
#and displays its primitive type and
#all possible information about it on the screen.

something = input('Type something: ')
print(f'The primitive type oh the value is ', type(something))
print('Is this UPPER? ', something.isupper())
print('Is this lower? ', something.islower())
print('Is this alphanumeric? ', something.isalnum())
print('Is this alpha? ', something.isalpha())
print('Is this decimal? ', something.isdecimal())
print('Is this number? ', something.isnumeric())
print('Is this Title? ', something.istitle())