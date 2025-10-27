# Python Exercise 32: Write a program that reads any given year
# and shows whether it is a leap year.

year = int(input('Enter a year: '))

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f'The year {year} is a leap year.')
else:
    print(f'The year {year} is not a leap year.')
