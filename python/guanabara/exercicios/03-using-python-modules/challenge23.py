# Python Exercise 23: Write a program that
# reads a number from 0 to 9999 and displays
# each one of its digits separately on the screen.

num = input('Enter a number between 0 and 9999: ').zfill(4)
print(f"""
Analyzing the number: {num}
Unit: {num[3]}
Ten: {num[2]}
Hundred: {num[1]}
Thousand: {num[0]}
""")
