# Python Exercise 25: Create a program that reads a person's
# name and tells whether or not they have “SILVA” in their name.

name = input('Enter your full name: ').strip()
print('Does the person have "SILVA" in their name?')
print('silva' in name.lower())
