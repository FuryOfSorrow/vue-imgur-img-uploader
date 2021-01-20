<template>
	<div class="dropper">
		<input
			type="file"
			@change="uploadImages($event.target.files)"
			multiple
			accept="image/*"
		/>
		<span>Drag files here!</span>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		name: 'UploadForm',
		methods: {
			...mapActions(['uploadImages'])
		}
	};
</script>

<style scoped>
	.dropper {
		display: flex;
		position: relative;

		justify-content: center;
		align-items: center;

		height: 30vh;
		border: 5px dashed #ddd;

		border-radius: 25px;
		overflow: hidden;
	}

	.dropper:hover {
		background-color: #f4f4f4;
	}

	input {
		position: absolute;

		width: 100%;
		height: 100%;

		opacity: 0;
	}
</style>