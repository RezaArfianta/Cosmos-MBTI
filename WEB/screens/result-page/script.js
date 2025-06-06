'use strict';

const jawaban = JSON.parse(sessionStorage.getItem('jawabanUser'));
const jawaban_elm = document.getElementById('jawaban');
async function getPrediction(jawaban){
    const data = {
        list_jawaban:jawaban
    }
    const response = await fetch('http://127.0.0.1:5000/predict',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json()
    jawaban_elm.textContent = result.prediksi;
}

getPrediction(jawaban);
