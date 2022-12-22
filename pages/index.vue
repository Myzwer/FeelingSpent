<template>
	<div>
		<div class="index-h1-background">
			<div class="py-10">
				<h1 class="text-center text-black text-9xl">Are You Spent?</h1>

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
			<div class="text-center mx-auto max-w-2xl md:max-w-7xl">
				<div class="grid grid-cols-12 gap-4 pt-10 pb-12">
					<div class="col-span-12 px-5">
						<div class="py-5 text-white">
							<h2 class="text-center text-8xl">Free Resource</h2>
							<p class="text-center font-bold">Download the pdf that has info and stuff</p>

							<ResourceForm />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-12">
			<div class="col-span-12 md:col-span-6 px-5 bg-yellow text-black">
				<h2 class="text-center text-8xl">Free Resource</h2>
				<p class="text-center font-bold">Download the pdf that has info and stuff</p>
			</div>

			<div class="col-span-12 md:col-span-6 px-5 bg-white text-black">
				<h2 class="text-center text-8xl">Free Resource</h2>
				<p class="text-center font-bold">Download the pdf that has info and stuff</p>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'IndexPage',
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
