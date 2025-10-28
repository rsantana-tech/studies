# Python Exercise 33: Write a program that reads three numbers and
# shows which one is the largest and which one is the smallest.

num1 = int(input('Enter the first number: '))
num2 = int(input('Enter the second number: '))
num3 = int(input('Enter the third number: '))

# assume the first number is both smallest and largest
smallest = num1
largest = num1

# check for smallest
if num2 < smallest:
    smallest = num2
if num3 < smallest:
    smallest = num3

# check for largest
if num2 > largest:
    largest = num2
if num3 > largest:
    largest = num3

print(f'The smallest number is {smallest}')
print(f'The largest number is {largest}')
