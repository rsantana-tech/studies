# Create a program that reads how much
# money a person has in their wallet and
# shows how many dollars they can buy.

money_wallet = float(input('How much money do you have in your wallet (R$)? '))
dollar_price = 5.41
real_converted_to_dollar = money_wallet / dollar_price

print(f'The value converted from BRL to USD is ${real_converted_to_dollar:.2f}')
