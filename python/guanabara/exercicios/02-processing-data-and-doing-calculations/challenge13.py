# Make a program that reads an
# employee's salary and displays
# their new salary with a 15% increase.

salary = float(input("Enter your current salary: "))
increase_rate = 15 / 100
new_salary = salary + (salary * increase_rate)

print(f"Your new salary, with a 15% increase, is ${new_salary:.2f}")
