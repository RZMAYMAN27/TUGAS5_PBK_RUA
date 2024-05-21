<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-black text-white" height-hint="98">
      <q-input
        outlined
        rounded
        dense
        placeholder="Cari Produk..."
        class="q-ml-md q-mr-md"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-space />
      <q-tabs align="left" class="text-white bg-primary">
        <q-tab label="ATASAN" />
        <q-tab label="LUARAN" />
        <q-tab label="BAWAHAN" />
        <q-tab label="TAS" />
        <q-tab label="TOPI" />
        <q-tab label="DASI" />
        <q-tab label="AKSESORIS" />
        <q-tab label="KAOS KAKI" />
        <q-tab label="OUTDOOR" />
        <q-tab label="ANAK" />
        <q-tab label="MUSLIM" />
      </q-tabs>
    </q-header>
cd
    <!-- Carousel -->
    <q-page-container>
      <q-carousel
        v-model="slide"
        swipeable
        animated
        infinite
        class="bg-grey-2"
        height="400px"
      >
        <q-carousel-slide
          v-for="(slide, index) in slides"
          :key="index"
        
          :name="index"
          :img-src="slide.img"
        />
      </q-carousel>

      <!-- Product Cards -->
      <div class="row q-pa-md">
        <div class="card-list">
          <q-card v-for="product in products" :key="product.id" class="q-mb-md">
            <q-img :src="product.img" :alt="product.name" />
            <q-card-section>
              <q-card-title>{{ product.name }}</q-card-title>
              <q-card-subtitle>{{ product.price }}</q-card-subtitle>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      slides: [
        {
          img: 'https://highlight.id/wp-content/uploads/2018/07/merek-fashion-branded-lokal-indonesia-produk-koleksi-pakaian-baju-cewek-terbaru-keren-ngehits_03.jpg',
        },
        {
          img: 'https://asset-2.tstatic.net/surabaya/foto/bank/images/ilustrasi-baju.jpg',
        },
        {
          img: 'https://via.placeholder.com/1920x400?text=Slide+3',
        },
      ],
      products: [
        {
          id: 1,
          name: 'cardigan rajut ',
          price: 'Rp 100.000',
          img: 'https://i.pinimg.com/564x/5d/48/f8/5d48f8934a33039178e32cb362a65fa3.jpg',
        },
        {
          id: 2,
          name: 'celana jeans ',
          price: 'Rp 200.000',
          img: 'https://i.pinimg.com/564x/dd/4d/1e/dd4d1ecf8db6974079a09062a61f2890.jpg',
        },
        {
          id: 3,
          name: 'kemeja ',
          price: 'Rp 300.000',
          img: 'https://i.pinimg.com/564x/4f/bc/ef/4fbcef586b85f966729e7c9c0518252f.jpg',
        },
      ],
    }
  }
}
</script>

<style>
.row {
  display: flex;
}
.q-pa-md {
  padding: 16px;
}
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex-grow: 1;
}
.q-card {
  width: calc(33% - 16px);
}
.q-toolbar-title img {
  max-height: 50px;
}
</style>
