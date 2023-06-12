<template>
  <div class="hero">
    <div class="d-none d-md-block">
      <!-- Versi Desktop -->
      <div class="row mt-4">
        <div class="col-md">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Menu Pupuler,</strong>
                <br />Di Gadget Anda
              </h2>
              <p>Silahkan Pesan Menu Favorit Anda</p>
              <router-link class="btn btn-lg btn-primary bi bi-arrow-right" to="/makanan">Pesan</router-link>
            </div>
          </div>
        </div>
        <div class="col-md">
          <img src="../assets/images/hero.svg" style="width: 100%;" />
        </div>
      </div>
    </div>

    <!-- Versi Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="row mt-4">
          <div class="col-md mb-3">
            <img src="../assets/images/hero.svg" style="width: 100%;" />
          </div>
        </div>
        <div class="col-md">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Menu Pupuler,</strong>
                <br />Di Gadget Anda
              </h2>
              <p>Silahkan Pesan Menu Favorit Anda</p>
              <button class="btn btn-lg btn-primary bi bi-arrow-right">Pesan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style>
</style>