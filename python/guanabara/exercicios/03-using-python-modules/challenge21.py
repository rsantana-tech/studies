# Python Exercise 21: Write a Python program
# that opens and plays the audio of an MP3 file.

import time
import pygame

pygame.mixer.init(frequency=44100, size=-16, channels=2, buffer=512)
pygame.init()

pygame.mixer.music.load('path.mp3')
pygame.mixer.music.set_volume(1.0)
pygame.mixer.music.play()

while pygame.mixer.music.get_busy():
    pygame.event.pump()
    time.sleep(0.1)