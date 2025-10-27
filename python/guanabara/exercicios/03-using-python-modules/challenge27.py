# Python Exercise 27: Write a program that reads a
# person's full name and then displays their first
# and last names separately.

name = input('Enter your full name: ').strip()
name_parts = name.split()

print(f"""
Your full name is: {name}
Your first name is: {name_parts[0]}
Your last name is: {name_parts[-1]}
""")
