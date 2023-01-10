<template>
	<div>
		<form name="contact" method="POST" data-netlify="true">
			<div class="grid grid-cols-12 gap-4 pt-10 pb-12">
				<div class="col-span-12 md:col-span-6 text-left mb-6">
					<input
						id="grid-first-name"
						class="appearance-none block w-full bg-white text-black border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						type="text"
						placeholder="John">
					<label
						class="uppercase tracking-wide text-xs font-bold ml-1"
						for="grid-first-name">
						First Name
					</label>
				</div>
				<div class="col-span-12 md:col-span-6 text-left">
					<input
						id="grid-last-name"
						class="appearance-none block w-full bg-white text-black border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						type="text"
						placeholder="Doe">
					<label
						class="uppercase tracking-wide text-xs font-bold ml-1"
						for="grid-last-name">
						Last Name
					</label>
				</div>
				<div class="col-span-12 text-left">
					<input
						id="grid-email"
						class="appearance-none block w-full bg-white text-black border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						type="text"
						placeholder="johndoe@gmail.com">
					<label
						class="uppercase tracking-wide text-xs font-bold ml-1"
						for="grid-email">
						Email
					</label>
				</div>
				<div class="col-span-12 text-left">
					<button
						class="bg-orange hover:bg-red shadow-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button">
						Submit
					</button>
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