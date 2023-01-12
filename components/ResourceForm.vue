<template>
	<div>
		<form name="contact" method="POST" data-netlify="true">
			<v-form v-model="valid">
				<v-container>
					<v-row>
						<v-col
							cols="12"
							md="6"
						>
							<v-text-field
								v-model="firstname"
								:rules="nameRules"
								:counter="10"
								label="First name"
								required
							></v-text-field>
						</v-col>

						<v-col
							cols="12"
							md="6"
						>
							<v-text-field
								v-model="lastname"
								:rules="nameRules"
								:counter="10"
								label="Last name"
								required
							></v-text-field>
						</v-col>

						<v-col
							cols="12"
							md="12"
						>
							<v-text-field
								v-model="email"
								:rules="emailRules"
								label="E-mail"
								required
							></v-text-field>
						</v-col>
						<v-col
							cols="12"
							md="12"
							class = "text-left"
						>
							<button
								class="bg-orange hover:bg-red shadow-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="submit">
								Submit
							</button>
						</v-col>
					</v-row>
				</v-container>
			</v-form>

		</form>
	</div>
</template>

<script>
export default {
	name: "ResourceForm",
	data: () => ({
		valid: false,
		firstname: '',
		lastname: '',
		nameRules: [
			v => !!v || 'Name is required',
			v => v.length <= 10 || 'Name must be less than 10 characters',
		],
		email: '',
		emailRules: [
			v => !!v || 'E-mail is required',
			v => /.+@.+/.test(v) || 'E-mail must be valid',
		],
	}),
}
</script>