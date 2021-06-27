<template>
	<ReadMore text="test" />
</template>

<script>
import ReadMore from "../../components/read-more/readMore.vue";

export default {
	data() {
		return {
			var1: "World",
		};
	},
	components: {
		ReadMore,
	},
};
</script>

<style scoped>
</style>