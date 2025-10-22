# Write a program that reads a value in meters
# and displays it converted to centimeters and millimeters.

meters = float(input('Enter a value in meters: '))
centimeters = meters * 100
millimeters = meters * 1000

unit = "meter" if meters == 1 else "meters"

print(f"""
The value you entered is {meters:.2f} {unit}.
Converted to centimeters: {centimeters:.2f} cm
Converted to millimeters: {millimeters:.2f} mm
""")
