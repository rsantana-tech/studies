# Create a program that reads the price
# of a product and displays its new price
# with a 5% discount.

product_price = float(input('Enter the product price: '))
discount_rate = 5 / 100
price_with_discount = product_price - (product_price * discount_rate)

print(f'The product price with a 5% discount is ${price_with_discount:.2f}')
