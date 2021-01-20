<template>
	<div>
		<div v-if="isLoggedIn" class="image-container">
			<img
				v-for="image in allImages"
				:src="image.link"
				:key="image.id"
				alt=""
			/>
		</div>
		<h2 v-else>Please, log in to get started</h2>
	</div>
	
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		name: 'ImageList',
		methods: {
			...mapActions(['fetchImages'])
		},
		computed: {
			...mapGetters(['allImages', 'isLoggedIn'])
		},
		created() {
			this.fetchImages();
		}
	};
</script>

<style scoped>
	.image-container {
		column-count: 3;
		column-gap: 0;
	}

	img {
		max-width: 100%;
		padding: 5px;
	}

	h2 {
		color: #555;
	}
</style>