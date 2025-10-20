# Create a program that receives two numbers and displays their sum and type.

number01 = int(input('Type a value: '))
number02 = int(input('Type other value: '))
sum_numbers = number01 + number02
msg_result_sum = f'The sum the number {number01} and {number02} is {sum_numbers}'

print(msg_result_sum)
print(f'The variable number01: {number01} is {type(number01)}')
print(f'The variable number02: {number02} is {type(number02)}')
print(f'The variable msg_result_sum: {msg_result_sum} is a {type(msg_result_sum)} formated')