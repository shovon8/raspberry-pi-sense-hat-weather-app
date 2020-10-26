from sense_hat import SenseHat
from time import sleep

sense = SenseHat()
sense.clear()

while True:
    tempC = sense.get_temperature()
    tempF = tempC * (9/5) + 32
    pressure = sense.get_pressure()
    humidity = sense.get_humidity()
    
    print("Temperature: %.2f°C/%.2f°F\n" % (tempC, tempF))
    print("Pressure: %.2f mb\n" % (pressure))
    print("Humidity: %.2f%%\n\n" % (humidity))
    sleep(5)
