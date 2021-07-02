<template>
	<div class="nested-test">
		<BitButtonTen />
	</div>
</template>

<script>
import BitButtonTen from "@bit/lait.vue-components.buttons.button-ten";

export default {
	name: "NestedTestSpace",
	components: {
		BitButtonTen,
	},
};
</script>
<style lang="scss">

.nested-test {
	--bit-btn-border-color: red;
}

</style>