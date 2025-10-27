# Python Exercise 22: Create a program that reads a person's full name and displays:
#
# – The name in all uppercase and lowercase letters.
#
# – The number of letters in total (excluding spaces).
#
# – The number of letters in the first name.

name = input('Enter your full name: ').strip()

print(f"""
Name in uppercase: {name.upper()}
Name in lowercase: {name.lower()}
Total number of letters (excluding spaces): {len(name.replace(' ', ''))}
Number of letters in the first name: {len(name.split()[0])}
""")
