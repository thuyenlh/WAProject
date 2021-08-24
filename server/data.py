import pandas as pd

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