# Python Exercise 26: Write a program that reads a sentence
# from the keyboard and shows how many times the letter “A” appears,
# the position where it first appears, and the position where it last appears.

sentence = input('Enter a sentence: ').strip().upper()

print(f"""
The sentence is: {sentence}
It contains: {sentence.count('A')} letter(s) 'A'
The first 'A' appears at position: {sentence.find('A')}
The last 'A' appears at position: {sentence.rfind('A')}
""")
