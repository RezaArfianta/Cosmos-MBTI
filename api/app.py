from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from joblib import load
import numpy as np

app = Flask(__name__)
CORS(app)

model_path = 'model.pkl'
label_encoder_path = 'label_encoder.joblib'

model = load(model_path)
label_encoder = load(label_encoder_path)

n_soal = 32

@app.route('/predict',methods=['POST'])
def predict():
    data = request.get_json()

    if 'list_jawaban' not in data:
        return make_response(jsonify({'error' : f'Jawaban user tidak terkirim'}),400)

    list_jawaban = data.get('list_jawaban')

    if len(list_jawaban) != n_soal:
        return make_response(jsonify({'error' : f'Banyaknya jawaban tidak sama dengan {n_soal}'}),400)
    for j in list_jawaban:
        if type(j) != int:
            return make_response(jsonify({'error' : 'Tipe jawaban tidak valid'}),400)
        elif j < -3 or j > 3:
            return make_response(jsonify({'error' : 'Jawaban tidak valid'}),400)
    

    pred_label = model.predict(np.reshape(list_jawaban,(1,-1)))
    pred_label = label_encoder.inverse_transform(pred_label)[0]

    return jsonify({'prediksi':pred_label})

if __name__ == '__main__':
    app.run(debug=True)