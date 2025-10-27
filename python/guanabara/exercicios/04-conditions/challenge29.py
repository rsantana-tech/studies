# Python Exercise 29: Write a program that
# reads a car’s speed. If it exceeds 80 km/h,
# display a message saying that the driver has
# been fined. The fine costs R$7.00 for
# each kilometer over the speed limit.

speed = int(input("Enter the car's speed (km/h): "))
speed_limit = 80

if speed > speed_limit:
    fine = 7 * (speed - speed_limit)
    print("🚨 You have been fined!")
    print(f"The fine costs a total of R${fine:.2f}")
else:
    print("✅ You are within the speed limit.")
