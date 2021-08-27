import pandas as pd
import random
import time

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

def str_time_prop(start, end, time_format, prop):

    stime = time.mktime(time.strptime(start, time_format))
    etime = time.mktime(time.strptime(end, time_format))

    ptime = stime + prop * (etime - stime)

    return time.strftime(time_format, time.localtime(ptime))


def random_date(start, end, prop):
    return str_time_prop(start, end, '%Y', prop)

def final_data():
    data = read_file()
    final_data = []
    for item in data:
        item['birthday'] = random_date("1980", "2000", random.random())
        final_data.append(item)
    return final_data