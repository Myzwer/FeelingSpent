<template>
	<div>

		<div class="text-center">
			<v-overlay
				:value="overlay"
				:opacity="opacity"
			>
				<div
					v-click-outside="onClickOutside"
					class = "bg-green p-10 rounded-xl shadow-xl">
					<h1 class="text-3xl text-bold">Success!</h1>
					<p>Our 5 Ways to Manage Your Money Better Resources is in your inbox!</p>
				</div>
				<div
					class="absolute top-3 right-5 cursor-pointer"
					@click = "overlay = !overlay">
					<font-awesome-icon icon="fa-solid fa-x" />
				</div>
			</v-overlay>
		</div>

		<div class="grid grid-cols-12">
			<div class="col-span-12 md:col-span-6">
				<div class="form-side-background">.</div>
			</div>
			<div class="col-span-12 md:col-span-6">
				<div class="bg-green">
					<div class="p-5 md:p-10 text-white">
						<h2 class="text-3xl font-bold capitalize">Free Resource</h2>
						<h3 class="text-xl font-bold capitalize pb-10">
							3 ways to manage your money better
						</h3>

						<div class="form">
							<form @submit.prevent="submitForm">
								<div class="name">
									<label>
										<span>First Name</span>
										<input v-model="fname" type="text" name="fname"/>
									</label>
									<label>
										<span>Last Name</span>
										<input v-model="lname" type="text" name="lname"/>
									</label>
								</div>

								<label>
									<span>Email</span>
									<input v-model="email" type="email" name="email"/>
								</label>
								<button type="submit">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ResourceForm',
	data() {
		return {
			email: '',
			fname: '',
			lname: '',
			endpoint: 'https://formcarry.com/s/XrqGavA1al',
			submitted: false,
			overlay: false,
			opacity: .9
		}
	},

	methods: {
		async submitForm() {
			const data = {
				email: this.email,
				fname: this.fname,
				lname: this.lname,
			}
			// eslint-disable-next-line no-unused-vars
			const response = await this.$axios.post(this.endpoint, data)
			if (response.status === 200) {
				this.submitted = true;
				this.email = '';
				this.fname = '';
				this.lname = '';
				this.overlay = true;
			} else {
				// handle error?
			}
		},
		onClickOutside() {
			this.overlay = false
		},
	},
}
</script>

<style>
/* stylelint-disable color-function-notation */

.form-side-background {
	background: linear-gradient(rgba(0, 0, 0, 0%), rgba(0, 0, 0, 0%)),
	url('~static/images/mockup.jpg');
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
}

@media screen and (max-width: 1020px) {
	.form-side-background {
		height: 300px;
	}
}

input[type='text'],
input[type='email'] {
	background-color: #E6E2D6;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 16%) 0 10px 36px 0, rgba(0, 0, 0, 6%) 0 0 0 1px;
	box-sizing: border-box;
	color: #333;
	display: inline-block;
	margin: 8px 0;
	padding: 12px 20px;
	width: 100%;
}

.name label {
	display: inline;
	width: 40%;
}

.form label {
	color: #eae5df;
	display: block;
	text-align: left;
	width: 100%;
}

button[type='submit'] {
	background-color: #DA895B;
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 16%) 0 10px 36px 0, rgba(0, 0, 0, 6%) 0 0 0 1px;
	color: #eae5df;
	cursor: pointer;
	margin: 18px 0;
	padding: 14px 20px;
	width: 100%;
	text-transform: uppercase;
	font-size: 1.2em;
	font-weight: 800;
}

button[type='submit']:hover {
	background-color: #d97c49;
}

/* stylelint-enable color-function-notation */
</style>
