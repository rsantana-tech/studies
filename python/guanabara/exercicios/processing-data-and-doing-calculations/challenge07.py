# Develop a program that reads a student's two grades
# and calculates and displays the average.

grade01 = float(input('Enter your first test grade: '))
grade02 = float(input('Enter your second test grade: '))
average_grade = (grade01 + grade02) / 2

print(f"""
The average of the grades {grade01:.2f} and {grade02:.2f}
is {average_grade:.2f}
""")
