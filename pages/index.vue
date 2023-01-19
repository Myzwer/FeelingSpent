<template>
	<div>
		<div class="index-h1-background">
			<div class="py-10">
				<h1 class="text-center text-black font-bold uppercase pb-5 text-2xl md:text-4xl">Are You feeling</h1>
				<div class="mx-auto text-center max-w-6xl">
					<img src="~static/images/spent-logo.png" alt="Spent Logo">
				</div>
			</div>
			<img class="w-screen" src="~static/images/collage.png" alt="Spent Collage">
		</div>

		<div class="bg-orange py-12 px-5 -mt-16">
			<div class="max-w-2xl mx-auto">
				<div class="pt-12 pb-16">
					<h2 class="md:text-center font-bold text-3xl uppercase">What’s your total monthly budget?</h2>
					<p class="md:text-center text-xl pb-10">(After Taxes)</p>
					<div class="text-center mx-auto">
						<input
							v-model.number="userTotal"
							class="shadow-lg bg-white rounded-xl w-full py-5 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="number"
							placeholder="Enter Monthly Salary"
						/>
					</div>
				</div>

				<budgetList
					v-for="(item, index) in budget"
					:key="item.name"
					:line-item="item.lineItem"
					:display-percent="item.displayPercent"
					:icon="item.icon"
					:total="userTotal"
					:even="index % 2 === 0"
				/>

			</div>
		</div>

		<resource-form />
		<image-card />
		<InviteSection />

	</div>
</template>

<script>
import budgetList from "~/components/budgetList"
import {budget} from '~/data/data.json'
import ImageCard from "~/components/Card";

export default {
	name: 'IndexPage',
	components: {ImageCard, budgetList},
	data() {
		return {
			budget,
			userTotal: null,
			total: null,
		}
	},
	head() {
		return {
			title: "Are you Spent? | Foothills Church", // This is the title that shows in the tab
			meta: [
				{hid: 'og-type', property: 'og:type', content: 'Spent: Living Content in a Spent World'}, // this is what shows when you post the site
				{hid: 'og-desc', property: 'og:description', content: 'Page Description Im reasonably sure.'},
				{
					hid: 'og-image', property: 'og:image',
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
