<template>
  <div class="makanan-detail">
    <NavBar />
    <div class="container">
      <!-- Breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/makanan" class="text-dark">Makanan</router-link>
              </li>
              <li class="breadcrumb-item active">Pesanan Makanan</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img :src="'../assets/images/'+product.gambar" alt class="img-fluid shadow" />
        </div>
        <div class="col-md-6 my-0">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga :
            <strong>Rp.{{ product.harga }}</strong>
          </h4>
          <form class="p-0" v-on:submit.prevent>
            <div class="form-group mb-2">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input type="number" class="form-control" v-model="pesan.jumlah_pemesanan" />
            </div>
            <div class="form-group mb-3">
              <label for="keterangan">Keterangan</label>
              <textarea
                v-model="pesan.keterangan"
                name="keterangan"
                class="form-control"
                cols="10"
                rows="4"
                placeholder="Pedas, Dingin, Nasi Setengah ..."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success" @click="pemesanan">
              <i class="bi bi-cart"></i> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import axios from "axios";
export default {
  name: "MakananDetail",
  components: {
    NavBar
  },
  data() {
    return {
      product: {},
      pesan: {}
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            this.$router.push({ path: "/keranjang" });
            this.$toast.success("Masuk Keranjang", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true
            });
          })
          .catch(err => console.log(err));
      } else {
        this.$toast.error("Jumlah Pesanan Harus Di Isi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true
        });
      }
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then(res => this.setProduct(res.data))
      .catch(err => console.log(err));
  }
};
</script>
<style>
</style>