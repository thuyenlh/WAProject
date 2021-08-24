from flask import Response, json, Flask
from flask_cors import CORS, cross_origin
from data import read_file

# Create Flask Server BE
app = Flask(__name__)
CORS(app)

#Add route
@app.route('/get_data', methods=['GET'])
@cross_origin(origin='*')
def get_data():
    try:
        data = read_file()
        return Response(response=json.dumps(data), status=200, mimetype="application/json")
    except Exception as e:
        print(e)

# Start BE
if __name__ == '__main__':
    app.run(host='0.0.0.0', port='9999')