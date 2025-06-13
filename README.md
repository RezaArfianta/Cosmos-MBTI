# Cosmos MBTI
Tugas Besar mata kuliah PASD

Koding Muda Nusantara
Anggota:
1. Hanif Imaduddin (103052300105)
2. Naufal Arkan Wahib (103052300009)
3. Gabriel Edbert Liandrew (103052330006)
4. Yan Andhinaya Ardika (103052300062)
5. Rafi Arkan Fachreza Arfianta (103052300074)

DS-47-03
Link Figma design UI: https://www.figma.com/design/FD0Aqj6XoqjjgRpqKQjIay/PASD---Koding-Muda-Nusantara?node-id=0-1&t=NKSFJ0Wiq5VsMoE1-1

## Instruksi untuk run Cosmos MBTI
Instruksi ini akan membantu Anda menyiapkan salinan proyek dan menjalankannya di mesin lokal Anda untuk tujuan pengembangan dan pengujian.

### Prasyarat
Pastikan Anda telah menginstal Python di sistem Anda. Proyek ini memerlukan beberapa pustaka (library) Python berikut:

* **Flask**: Kerangka kerja web mikro untuk Python.
* **Flask-Cors**: Ekstensi untuk Flask guna menangani Cross-Origin Resource Sharing (CORS).
* **Joblib**: Seperangkat alat untuk menyediakan *pipelining* ringan di Python.

### Instalasi
1.  **Clone repositori ini**
    ```bash
    git clone https://github.com/RezaArfianta/Cosmos-MBTI.git
    cd Cosmos-MBTI
    ```
2.  **Instal pustaka yang dibutuhkan**
    Sangat disarankan untuk menggunakan *virtual environment*. Anda dapat menginstal semua dependensi sekaligus dengan membuat file `requirements.txt` dan menjalankan perintah berikut:
    ```bash
    pip install flask
    pip install flask_cors
    pip install joblib
    ```

## Cara Penggunaan
Untuk meluncurkan aplikasi, Anda perlu menjalankan server API dan server web secara bersamaan.
1.  **Jalankan Server API**
    Di terminal Anda, jalankan skrip Python berikut:
    ```bash
    python app.py
    ```

2.  **Jalankan Server Web**
    Buka **jendela terminal baru**, lalu jalankan aplikasi server web:
    ```bash
    web-server.exe
    ```

3.  **Akses Aplikasi**
    Setelah kedua server berjalan, buka browser web favorit Anda dan kunjungi alamat berikut:
    ```
    http://localhost:8080/
    ```

Berikut adalah cara kedua untuk meluncurkan aplikasi menggunakan Docker.
1. **Tarik Gambar dari Docker**
   ```
   docker pull hanifimaduddin/mbti_web
   docker pull hanifimaduddin/mbti-api
   ```

2. **Jalankan Backend API**

   API akan berjalan di: http://localhost:5000
   ```
   docker run -d --name mbti-web -p 5000:8000 hanifimaduddin/mbti_api
   ```

4. **Jalankan Frontend Web**

   Aplikasi web akan berjalan di: http://localhost:7070
   ```
   docker run -d --name mbti-web -p 7070:8080 hanifimaduddin/mbti_web
   ```
