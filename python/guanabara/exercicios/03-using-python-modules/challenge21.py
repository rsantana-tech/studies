# Python Exercise 21: Write a Python program
# that opens and plays the audio of an MP3 file.

import pygame

pygame.init()
pygame.mixer.music.load('my_file.mp3')
pygame.mixer.music.play()
pygame.event.wait()