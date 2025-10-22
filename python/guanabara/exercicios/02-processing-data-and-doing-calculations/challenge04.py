# Exercise 4 – Dissecting a Variable
# Write a program that reads input from the keyboard
# and displays its primitive type and
# all possible information about it on the screen.

something = input('Type something: ')
print('The primitive type of the value is', type(something))
print('Is it uppercase?', something.isupper())
print('Is it lowercase?', something.islower())
print('Is it alphanumeric?', something.isalnum())
print('Is it alphabetic?', something.isalpha())
print('Is it decimal?', something.isdecimal())
print('Is it numeric?', something.isnumeric())
print('Is it titlecase?', something.istitle())
