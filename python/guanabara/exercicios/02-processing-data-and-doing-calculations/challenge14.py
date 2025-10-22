# Python Exercise 14: Write a program that takes
# a temperature in degrees Celsius
# and converts it to degrees Fahrenheit.

celsius = float(input('Enter the temperature in Celsius: '))
fahrenheit = (celsius * 1.8) + 32

print(f'The temperature {celsius:.1f}°C corresponds to {fahrenheit:.1f}°F.')
