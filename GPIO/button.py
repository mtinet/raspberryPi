import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
print "Input Signal Detection"
GPIO.setup(23, GPIO.IN)
try:
	while True:
		if GPIO.input(23) == False:
			print "0V [off] state"
		else:
			print "3.3V [on] state detected"
		time.sleep(1)
except KeyboardInterrupt:
	GPIO.cleanup()
print "LED Input Test End"
