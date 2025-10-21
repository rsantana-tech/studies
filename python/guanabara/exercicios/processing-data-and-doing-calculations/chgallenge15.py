# Python Exercise 15: Write a program
# that asks how many kilometers a rental car
# has traveled and how many days it has been rented.
# Calculate the price, knowing that the car costs
# R$60 per day and R$0.15 per kilometer driven.

km = float(input('Enter the number of kilometers driven: '))
days = int(input('Enter the number of days rented: '))
cost_km = km * 0.15
cost_days = days * 60
total_cost = cost_km + cost_days

print(f'The total rental cost is R${total_cost:.2f}')
