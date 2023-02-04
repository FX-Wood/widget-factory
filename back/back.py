from flask import Flask
from requests import get

app = Flask(__name__)

@app.route('/widget')
def widget():
    # TODO: make this address configurable
    widget = get('http://assembly:5000').content.decode('utf-8')
    return f'Here is your widget. Its number is {str(widget)}'

