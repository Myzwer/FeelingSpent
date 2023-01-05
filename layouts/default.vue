<template>
	<div>
		<header style="background-color: #234058;">
			<nuxt-link to="/">
				<img
					src="/images/logo.png"
					alt="marker"
					class="text-center mx-auto fc-logo p-1"
				>
			</nuxt-link>
		</header>
		<Nuxt/>
		<div style="background-color: #234058;">
			<div class="text-center py-5 text-white">
			<h6>{{currentYear}} - Foothills Church</h6>
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
