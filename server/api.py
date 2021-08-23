import pandas as pd
from flask import Response, json, Flask
from flask_cors import CORS, cross_origin

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

def read_file():
    data = []

    df1 = pd.read_csv('https://query.data.world/s/dj7bp6ryuwhvgbl5ewxilwy4byx5n7', encoding="utf-8")
    data1 = df1.to_dict('records')
    data.extend(data1)

    df2 = pd.read_csv('https://query.data.world/s/o3e574rnzy4e3carnp5b3b6rdbk5qr')
    data2 = df2.to_dict('records')
    data.extend(data2)

    df3 = pd.read_csv('https://query.data.world/s/i3wvijmspfnp6zaeceg2n7s4bj6eto')
    data3 = df3.to_dict('records')
    data.extend(data3)
    return data
# Start BE
if __name__ == '__main__':
    app.run(host='0.0.0.0', port='9999')