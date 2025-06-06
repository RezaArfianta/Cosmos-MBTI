'use strict';

const jawaban = JSON.parse(sessionStorage.getItem('jawabanUser'));
console.log(jawaban);
if (jawaban.length < 32){
    window.location.href = '/home';
}
const mbti_og = document.getElementById('mbti-og');
const mbti_cosmos = document.getElementById('mbti-cosmos');
const cosmos_desc = document.getElementById('cosmos-desc');
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
    mbti_og.textContent = result.prediksi;
    console.log(result.prediksi)
    fetch('cosmos.json')
    .then(response => response.json())
    .then(dictionary => {
        mbti_cosmos.textContent = dictionary[result.prediksi][0];
        cosmos_desc.textContent = dictionary[result.prediksi][2]
    })
    .catch(error => console.error('Error: fetching JSON: ',error))
}

getPrediction(jawaban);

