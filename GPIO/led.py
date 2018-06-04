import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
print "Use GPIO 18 to on/off LED"
GPIO.setup(18,GPIO.OUT)
GPIO.output(18, False)
count = 0

while count < 3:
	GPIO.output(18, True)
	time.sleep(1)
	GPIO.output(18, False)
	time.sleep(2)
	count += 1
print "LED Test End"
GPIO.cleanup()

