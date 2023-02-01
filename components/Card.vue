<template>
  <div class="bg-yellow">
    <div class="max-w-4xl mx-auto px-5 py-20">
      <div class="grid grid-cols-12 gap-4">
        <div
          class="col-span-12 md:col-span-6 bg-white rounded-xl shadow-xl card-lock relative"
        >
          <div class="card-1-background rounded-t-xl relative">
            <div class="absolute bottom-5 left-5">
              <h2 class="font-bold text-white capitalize text-xl">
                Financial Peace University
              </h2>
            </div>
          </div>
          <div class="p-5">
            <h3>February 18-20</h3>
            <h2 class="font-bold">Foothills Church Maryville Location</h2>
            <p class="pt-5">
              Join us for Dave Ramsay’s FPU, where you can learn to take control
              of your money and take back your life.
            </p>
          </div>

          <div class="absolute bottom-5 left-5">
            <a class="text-red uppercase font-bold pr-5" href="https://foothillschurch.com/event-financial-peace-university/">Register</a>
          </div>
        </div>

        <div
          class="col-span-12 md:col-span-6 bg-white rounded-xl shadow-xl card-lock relative"
        >
          <div class="card-2-background rounded-t-xl relative">
            <div class="absolute bottom-5 left-5">
              <h2 class="font-bold text-white capitalize text-xl">
                EveryDollar Budgeting Software
              </h2>
            </div>
          </div>
          <div class="p-5">
            <h3>Free to Use</h3>
            <h2 class="font-bold">
              Convenient, easy to use budgeting software
            </h2>
            <p class="pt-5">
              Want to get on a budget in 2023? Well we have made EveryDollar
              available to all partners!
            </p>
          </div>

          <div class="absolute bottom-5 left-5">
            <a class="text-red uppercase font-bold pr-5" href="https://www.ramseysolutions.com/ramseyplus/everydollar">Learn More</a>
            <a class="text-red uppercase font-bold" href="https://foothillschurch.churchcenter.com/people/forms/499035">Get Access</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  data() {
    return {
      img: '~static/images/graph.jpg',
    }
  },
}
</script>

<style>
/* stylelint-disable color-function-notation */

.card-1-background {
  background: linear-gradient(rgba(0, 0, 0, 50%), rgba(0, 0, 0, 50%)),
    url('~static/images/fpu.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
}

.card-2-background {
  background: linear-gradient(rgba(0, 0, 0, 50%), rgba(0, 0, 0, 50%)),
    url('~static/images/everydollar.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
}

.card-lock {
  min-height: 500px;
}
@media screen and (min-width: 40em) {
  .card-lock {
    min-height: 450px;
  }
}

/* stylelint-enable color-function-notation */
</style>
