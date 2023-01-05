<template>
	<div>
		<div class="index-h1-background">
			<div class="py-10">
				<h1 class="text-center text-black pb-5 text-7xl md:text-9xl">Are You Spent?</h1>

				<div class="text-center mx-auto max-w-2xl md:max-w-7xl">
					<div class="bg-orange border-8 border-black">
						<div class="grid grid-cols-12 gap-4 pt-10 pb-12">
							<div class="col-span-12 md:col-span-5 px-5">
								<h3 class="text-3xl body-font font-bold">Your Total Monthly Budget</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-green">
			<div class="text-center mx-auto max-w-2xl md:max-w-4xl">
				<div class="grid grid-cols-12 gap-4 pt-10 pb-12">
					<div class="col-span-12 px-5">
						<div class="py-5 text-white">
							<h2 class="text-center text-5xl md:text-8xl">Free Resource</h2>
							<p class="text-center font-bold">Download the pdf that has info and stuff</p>
							<ResourceForm/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-12">
			<div class="col-span-12 md:col-span-6 px-5 bg-yellow text-black pt-10 pb-20">
				<h2 class="text-center text-5xl md:text-8xl">Financial Peace University</h2>
				<div class=" md:px-10">
					<p class="text-left font-bold pt-5">Feel like you are lost financially? Or maybe you have a budget
						but you aren't sticking to it? Join us for Financial Peace University by Dave Ramsay, and learn
						how to take control of your money!</p>
					<p class="text-left font-bold pt-5">WHERE: Foothills Church Maryville Location</p>
					<p class="text-left font-bold">WHEN: February 18-30</p>
					<div class="text-center pt-8">
						<button
							class="bg-green shadow-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
							Register Now
						</button>
					</div>
				</div>
			</div>

			<div class="col-span-12 md:col-span-6 px-5 bg-white text-black pt-10 pb-20">
				<h2 class="text-center text-5xl md:text-8xl ">Everydollar Budgeting Software</h2>
				<div class="md:px-10">
					<p class="text-left font-bold pt-5">Use our budgeting software for free and get your life back on
						track so Dave Ramsay doesn’t yell at you.</p>
					<div class="text-center pt-8">
						<button
							class="bg-green shadow-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
							Get My Budget
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-orange text-black">
			<div class="max-w-2xl md:max-w-4xl mx-auto">
				<div class="grid grid-cols-12">
					<div class="col-span-12 px-5 pt-10 pb-20">
						<h2 class="text-center text-5xl md:text-8xl">Plan A Visit</h2>
						<div class=" md:px-10">
							<p class="text-left font-bold pt-5 pb-10">We’d love for you to join us at Foothills Church in
								either our Main campus in Maryville or the other one in Knoxville. You can click the
								buttons below to get info on service times, the experience and more!</p>

							<div class="grid grid-cols-12">
								<div class="col-span-12 md:col-span-6 text-center">
									<h3 class="text-2xl">Maryville</h3>
									<button
										class="bg-green shadow-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
										Plan Your Visit
									</button>
								</div>
								<div class="col-span-12 md:col-span-6 text-center">
									<h3 class="text-2xl">Knoxville</h3>
									<button
										class="bg-green shadow-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
										Plan Your Visit
									</button>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	head() {
		return {
			title: "Are you Spent? | Foothills Church", // This is the title that shows in the tab
			meta:[
				{ hid: 'og-type', property: 'og:type', content: 'Spent: Living Content in a Spent World' }, // this is what shows when you post the site
				{ hid: 'og-desc', property: 'og:description', content: 'Page Description Im reasonably sure.' },
				{ hid: 'og-image', property: 'og:image',
					content: '/images/spent.jpg'
				},
			]
		};
	},
}
</script>

<style>
/* stylelint-disable color-function-notation */

.index-h1-background {
	background: linear-gradient(
		rgba(0, 0, 0, 0%),
		rgba(0, 0, 0, 0%)
	), url("~static/images/graph.jpg");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

/* stylelint-enable color-function-notation */
</style>
