# Python Exercise 24: Create a program that
# reads the name of a city and tells
# whether
# or not it starts with the word “SANTO”.

city = input("Enter the name of a city: ").strip()
print(city.split()[0].upper() == 'SANTO')
