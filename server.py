from flask import Flask
from flask import jsonify
from flask import render_template
from flask import url_for
from sense_hat import SenseHat

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


sense = SenseHat()
sense.clear()

with app.test_request_context():
    url_for('static', filename='style.css')
    url_for('static', filename='app.js')

@app.route('/api')
def api():
    tempC = sense.get_temperature()
    tempF = tempC * (9/5) + 32
    pressure = sense.get_pressure()
    pressurePsi = pressure * 0.0145038
    pressureP = pressure * 100
    humidity = sense.get_humidity()
    
    return jsonify({
        "temperature": { "C": tempC, "F": tempF },
        "pressure": { "mb": pressure, "hPa": pressure, "psi": pressurePsi, "P": pressureP },
        "humidity": humidity
    })





@app.route('/')
def home():
    return render_template('./home.html')