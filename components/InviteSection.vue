<template>
  <div>
    <div class="grid grid-cols-12">
      <div class="col-span-12 md:col-span-6">
        <div class="bg-green">
          <div class="p-5 md:p-16 text-white">
            <h2 class="text-3xl font-bold capitalize">Join us in person!</h2>
            <p class="text-lg md:text-xl font-bold">
              Gas prices, the housing market, debt, and inflation has many of us
              feeling spent. Luckily for us, God does not leave us to manage His
              money alone. Join us for our new series called Spent, where we
              will look at practical wisdom for navigating a spent and
              money-tight world.
            </p>

            <div class="mt-10 md:inline-block">
              <a
                href="https://foothillschurch.com/find-a-location/maryville/"
                class="bg-orange text-black uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 mt-10 mr-5 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
                >Explore Maryville</a
              >
            </div>
            <div class="my-10 md:inline-block">
              <a
                href="https://foothillschurch.com/find-a-location/knoxville/"
                class="bg-orange text-black uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 mt-10 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
                >Explore Knoxville</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6">
        <div class="cta-side-background"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InviteSection',
}
</script>

<style>
/* stylelint-disable color-function-notation */

.cta-side-background {
  background: linear-gradient(rgba(0, 0, 0, 0%), rgba(0, 0, 0, 0%)),
    url('~static/images/invite.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

@media screen and (max-width: 39.9375em) {
  .cta-side-background {
    height: 300px;
  }
}

/* stylelint-enable color-function-notation */
</style>
