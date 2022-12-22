<template>
	<div>
		<form class="">
			<div class="grid grid-cols-12 gap-4 pt-10 pb-12">
				<div class="col-span-12 md:col-span-6 text-left">
					<input
						id="grid-first-name"
						class="appearance-none block w-full bg-white text-black border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						type="text"
						placeholder="Jane">
					<label
						class="uppercase tracking-wide text-xs font-bold mb-1 ml-3"
						for="grid-first-name">
						First Name
					</label>
				</div>
			</div>

		</form>
	</div>
</template>

<script>
export default {
	name: "ResourceForm"
}
</script>