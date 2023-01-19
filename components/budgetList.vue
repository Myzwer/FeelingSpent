<template>
	<div class="pb-5">
		<div
			class="shadow-lg rounded-lg"
			:class="`
		${even ? 'bg-white-alt' : 'bg-white'}`"
		>
			<div class="grid grid-cols-12 gap-4 p-3">
				<div class="col-span-10 relative">
					<div
						class="shadow-lg inline-block p-3 rounded-lg text-xl md:text-3xl"
						:class="`
						${even ? 'bg-white' : 'bg-white-alt'}`"
					>
						<img :src="icon" alt="Icon">
					</div>
					<div class="inline-block absolute top-2 left-18 md:left-20">
						<h3 class="font-bold text-xl md:text-2xl">{{ lineItem }}</h3>
						<p class="-mt-2">{{ displayPercent }}%</p>
					</div>
				</div>

				<div class="col-span-2 relative">
					<div class="inline-block absolute top-5 right-2 md:right-5">
						<h3 class="font-bold text-lg md:text-2xl">${{ budgetPercent }}</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BudgetList',
	props: {
		even: {
			type: Boolean,
			required: true,
		},
		lineItem: {
			type: String,
			required: true,
		},
		displayPercent: {
			type: Number,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		},
		total: {
			type: Number,
			required: false,
			default: null
		},

	},
	computed: {
		budgetPercent() {
			const budgetAmount = this.total * (this.displayPercent / 100)
			return Math.round(budgetAmount);
		}
	}
}
</script>
