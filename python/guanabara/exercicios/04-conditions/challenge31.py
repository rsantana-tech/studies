# Python Exercise 31: Develop a program that
# asks for the distance of a trip in kilometers.
# Calculate the price of the ticket, charging
# R$0.50 per kilometer for trips up to 200 km and
# R$0.45 for longer trips.

distance_trip = float(input('Enter the distance (km) of your trip: '))

if distance_trip <= 200:
    price_per_km = 0.50
else:
    price_per_km = 0.45

total_cost = distance_trip * price_per_km
print(f'The ticket will cost ${total_cost:.2f}')
