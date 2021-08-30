import pandas as pd

def sales_data():
    df = pd.read_excel('https://query.data.world/s/dtsgmkro4i3acgsuh7qlgmsr5sgomk')
    df.columns = df.columns.str.replace(' ','_')
    final_data = df.to_dict('records')
    return final_data[:1000]
