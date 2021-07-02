<template>
	<div class="test">
		<BitButtonTen />
		<NestedTestSpace />
	</div>
</template>

<script>
import BitButtonTen from "@bit/lait.vue-components.buttons.button-ten";
import NestedTestSpace from "./nestedTest/NestedTestSpace.vue"

export default {
	name: "TestSpace",
	components: {
		BitButtonTen,
		NestedTestSpace,
	},
};
</script>
<style lang="scss">
</style>