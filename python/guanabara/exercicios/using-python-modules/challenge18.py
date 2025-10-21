# Python Exercise 18: Write a program that reads any
# angle and displays the sine, cosine, and tangent
# values of that angle on the screen.

import math

angle_degrees = float(input('Enter an angle in degrees: '))
angle_radians = math.radians(angle_degrees)

sine = math.sin(angle_radians)
cosine = math.cos(angle_radians)
tangent = math.tan(angle_radians)

print(f"""
Angle: {angle_degrees:.1f}°
Sine: {sine:.2f}
Cosine: {cosine:.2f}
Tangent: {tangent:.2f}
""")
