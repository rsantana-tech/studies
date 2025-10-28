# Python Exercise 35: Develop a program that reads the length of three line segments
# and tells the user whether or not they can form a triangle.

a = float(input('Enter a side of the triangle (cm): '))
b = float(input('Enter another side of the triangle (cm): '))
c = float(input('Enter the last side of the triangle (cm): '))

if (a < b + c) and (b < c + a) and (c < a + b):
    print(f'\n✅ The line segments {a:.1f}, {b:.1f}, and {c:.1f} can form a triangle.')
else:
    print(f"\n❌ The line segments {a:.1f}, {b:.1f}, and {c:.1f} cannot form a triangle.")
