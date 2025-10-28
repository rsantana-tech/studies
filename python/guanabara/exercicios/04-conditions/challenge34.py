# Python Exercise 34: Write a program that asks for an employee’s salary
# and calculates the amount of their raise. For salaries greater than $1250.00,
# apply a 10% increase. For salaries equal to or less than that, the increase should be 15%.

salary = float(input("Enter the employee's current salary: "))

if salary <= 1250:
    new_salary = salary + (salary * 0.15)
else:
    new_salary = salary + (salary * 0.10)

print(f"The new salary after the raise is: $ {new_salary:.2f}")
