<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>
            Daftar
            <strong>Makanan</strong>
          </h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Makanan Anda"
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="searchFood"
            />
            <span class="input-group-text" id="basic-addon1">
              <i class="bi bi-search"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import CardProduct from "../components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Makanan",
  components: {
    Navbar,
    CardProduct
  },
  data() {
    return {
      products: [],
      search: ""
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then(res => this.setProducts(res.data))
        .catch(err => console.log(err));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then(res => this.setProducts(res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>