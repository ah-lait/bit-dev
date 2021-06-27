<template>
	<div class="hello">
		<VideoModal :isOpen="isVideoModalOpen" :toggleModal="this.toggleVideoModal">
			<iframe
				src="https://www.youtube.com/embed/HKybDdGHZHE"
				height="315"
				width="560"
				frameborder="0"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</VideoModal>
		<button @click="toggleVideoModal">Open video modal</button>
	</div>
</template>

<script>
import VideoModal from "../../components/video-modal/VideoModal/VideoModal.vue";

export default {
	name: "video-modal-page",
	components: {
		VideoModal,
	},
	data() {
		return {
			isVideoModalOpen: false,
		};
	},
	methods: {
		toggleVideoModal() {
			this.isVideoModalOpen = !this.isVideoModalOpen;
		},
	},
};
</script>