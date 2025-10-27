# Python Challenge 1 – Monthly Salary Calculator

name = input("Employee's name: ").strip()
worked_hours = float(input("Hours worked: "))
hour_rate = float(input("Hourly rate: "))
total_salary = worked_hours * hour_rate

print(f"""
Employee: {name}
You worked {worked_hours:.1f} hours
At an hourly rate of $ {hour_rate:.2f}
Your total salary is $ {total_salary:.2f}
""")
