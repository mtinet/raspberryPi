import RPi.GPIO as GPIO
import time

gpwmPin = 18
gpioPin = 13

GPIO.setmode(GPIO.BCM)

GPIO.setup(gpwmPin, GPIO.OUT)
GPIO.setup(gpioPin, GPIO.OUT)

p1 = GPIO.PWM(gpwmPin, 384)
p2 = GPIO.PWM(gpioPin, 384)

p1.start(0)
p2.start(0)

angle = 0.0
dir = 1;

try:
	while True:
		
		if(angle > 100.0):
			dir = dir * -1
		if(angle < 0):
			dir = dir * -1
		angle += dir
		p1.ChangeDutyCycle(angle)
		p2.ChangeDutyCycle(angle)
		print "PWM Duty:", angle
		time.sleep(0.1)
except KeyboardInterrupt:
	GPIO.cleanup()

print "PWM Test End"

