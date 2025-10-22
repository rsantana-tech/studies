# Write a program that reads the height and
# width of a wall in meters. Calculate its area
# and the amount of paint needed to paint it,
# knowing that each liter of paint covers an area of 2 m².

height = float(input('Enter the wall height (m): '))
width = float(input('Enter the wall width (m): '))
area = height * width
paint_needed = area / 2

print(f"""
The wall area is {area:.2f} m².
You will need {paint_needed:.2f} liters of paint.
""")
