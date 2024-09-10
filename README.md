<h1>Project Overview</h1>

Proyek ini merupakan tugas akhir kelas Intermediate Machine Learning Engineer dari [dicoding](https://www.dicoding.com/). Tujuan dari proyek ini adalah mengklasifikasikan gambar 10 hewan berbeda dengan dataset diambil dari <https://www.kaggle.com/datasets/alessiocorrado99/animals10>. Hewan tersebut yaitu *dog, horse, elephant, butterfly, chicken, cat, cow, sheep, spider, squirrel.*

<img src="https://github.com/user-attachments/assets/48e6f80d-df1f-404a-aedc-4023e9720bc9" alt="10 Animals">

*Beberapa contoh gambar dari setiap kelas.*

Hasil pelatihan dengan nilai terbaik memperoleh:
- accuracy: 0.9624
- val_accuracy: 0.9644

<p align="center">
  <img src="https://github.com/user-attachments/assets/1175e95e-1b5a-483c-bf0c-22c56da5e943" alt="Nilai akurasi" width="400"/>
  <img src="https://github.com/user-attachments/assets/9e13b5c0-c004-4c29-a020-bce9f8abab52" alt="Loss" width="400"/>
</p>

*Plotting nilai akurasi dan loss pada pelatihan model.*

Model yang dilatih disimpan dalam format *saved_model, tflite, dan tfjs*. Model deployment menggunakan model tfjs dan hasilnya seperti pada gambar berikut.

<img src="https://github.com/user-attachments/assets/bc00cb3e-02f6-41f3-aff0-8c8090d22916" alt="Deploy model">

*Tampilan website menggunakan model Tensorflow.js.*
