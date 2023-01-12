<template>
	<div>
		<div class="index-h1-background">
			<div class="py-10">
				<h1 class="text-center text-black font-bold uppercase pb-5 text-4xl">Are You feeling</h1>


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
