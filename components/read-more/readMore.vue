<template>
	<div class="read-more">
		<p class="read-more__text">{{ text }}</p>
	</div>
</template>

<script>
export default {
	name: "ReadMore",
	props: {
		text: String,
	},
};
</script>
<style scoped lang="scss">
.read-more {
	&__text {
		font-size: 1.2rem;
		color: red;
	}
}
</style>
