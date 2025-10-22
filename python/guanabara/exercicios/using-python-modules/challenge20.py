#Python Exercise 20: The same teacher from challenge 19
# wants to draw the order of presentation of the students'
# projects. Make a program that reads the names of the four
# students and shows the drawn order.
import random
n1 = input('Enter the first student\'s name: ')
n2 = input('Enter the second student\'s name: ')
n3 = input('Enter the third student\'s name: ')
n4 = input('Enter the fourth student\'s name: ')

students = [n1, n2, n3, n4]
random.shuffle(students)

print('The presentation order is:')
print(students)

