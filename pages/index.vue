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
