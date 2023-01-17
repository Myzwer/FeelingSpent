<template>
	<div>
		<div class="grid grid-cols-12">
			<div class=" col-span-12 md:col-span-6">
				<div class="form-side-background">.</div>
			</div>
			<div class="col-span-12 md:col-span-6">
				<div class="bg-green">
					<div class="p-10 text-white">
						<h2 class = "text-3xl font-bold capitalize">Free Resource</h2>
						<h3 class = "text-xl font-bold capitalize">3 ways to manage your money better</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ResourceForm",
}
</script>

<style>
/* stylelint-disable color-function-notation */

.form-side-background {
	background: linear-gradient(
		rgba(0, 0, 0, 0%),
		rgba(0, 0, 0, 0%)
	), url("~static/images/form-bg.jpg");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
}

/* stylelint-enable color-function-notation */
</style>