"use strict";

fetch('questions.json')
.then(response => response.json())
.then(data => {
    const list_pertanyaan = data.pertanyaan;
    let i = 0;
    let list_jawaban = [];
    const pertanyaan = document.getElementById('pertanyaan');
    pertanyaan.textContent = list_pertanyaan[i];

    const radio_inputs = document.querySelectorAll('.radio-input');
    radio_inputs.forEach(radio_input => {
        radio_input.addEventListener('click',function (event){
            i = i+1;
            const jawaban_str = radio_input.value;
            console.log(jawaban_str);
            list_jawaban.push(parseInt(jawaban_str));

            pertanyaan.textContent = list_pertanyaan[i];

            if (i == 32){
                sessionStorage.setItem('jawabanUser',JSON.stringify(list_jawaban));
                window.location.href = '/result';
            }
        })
    })
})
.catch(error => console.error('Error: fetching JSON: ',error))