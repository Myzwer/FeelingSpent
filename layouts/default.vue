<template>
  <div>
    <header style="background-color: #657c13">
      <nuxt-link to="/">
        <div class="relative">
          <img
            src="/images/logo.png"
            alt="marker"
            class="text-center mx-auto fc-logo p-3 inline"
          />
          <div class="absolute top-6 left-20">
            <h1 class="text-white-pure text-2xl font-bold">SPENT</h1>
          </div>
        </div>
      </nuxt-link>
    </header>
    <Nuxt />
    <div style="background-color: #234058">
      <div class="text-center py-5 text-white">
        <h6>{{ currentYear }} - Foothills Church</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>
