## Running the Web App
> $ git clone https://github.com/shovon8/raspberry-pi-sense-hat-weather-app.git

> $ cd raspberry-pi-sense-hat-weather-app/

> $ sudo cp -v weather-station.service /etc/systemd/system/

> $ sudo systemctl daemon-reload

> $ sudo systemctl enable weather-station

> $ sudo reboot

Then, access `http://<ip-addr>:5000` from a web browser.