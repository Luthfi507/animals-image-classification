<h1>Project Overview</h1>

Proyek ini merupakan tugas akhir kelas Intermediate Machine Learning Engineer dari [dicoding](https://www.dicoding.com/). Tujuan dari proyek ini adalah mengklasifikasikan gambar 10 hewan berbeda dengan dataset diambil dari <https://www.kaggle.com/datasets/alessiocorrado99/animals10>. Hewan tersebut yaitu *dog, horse, elephant, butterfly, chicken, cat, cow, sheep, spider, squirrel.*
<figure>
    <img src="output.png"
         alt="10 Animals">
    <figcaption>Beberapa contoh gambar dari setiap kelas.</figcaption>
</figure>

Hasil pelatihan memperoleh:
- accuracy: 0.9624
- val_accuracy: 0.9644
<figure>
    <img src="plot.png"
         alt="Hasil pelatihan">
    <figcaption>Plotting nilai akurasi dan loss pada pelatihan model.</figcaption>
</figure>

Model yang dilatih disimpan dalam format *saved_model, tflite, dan tfjs*. Model deployment menggunakan model tfjs dan hasilnya seperti pada gambar berikut.
<figure>
    <img src="deployment.png"
         alt="Deploy model">
    <figcaption>Tampilan website menggunakan model Tensorflow.js.</figcaption>
</figure>