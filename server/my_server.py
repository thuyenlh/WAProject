from flask import Flask
from flask_cors import CORS, cross_origin
from flask import request
import json

# Create Flask Server BE
app = Flask(__name__)

# Apply Flask Cors

CORS(app)
app.config['CORS-HEADER'] = 'Content-Type'

# Add route

@app.route('/get', method = ['GET'])
@cross_origin(origin='*')
def get_user_data():
    with open('data.json', mode='r+') as file:
        user_data = json.load(file)
    
    
# Start BE

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='9999')