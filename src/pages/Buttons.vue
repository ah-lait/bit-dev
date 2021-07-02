<template>
	<div class="buttons">
		<h3>Button ten</h3>
		<div style="display: flex; margin-top: 50px">
			<BitButtonTen revert-direction />
			<ButtonTen />
			<IconArrow />

			<TestSpace />
		</div>
	</div>
</template>

<script>
import ButtonTen from "../components/buttons/ButtonTen.vue";
import BitButtonTen from "@bit/lait.vue-components.buttons.button-ten";
import IconArrow from "../components/svg/IconArrow.vue";
import TestSpace from "../components/test/TestSpace.vue";

export default {
	components: {
		ButtonTen,
		BitButtonTen,
		IconArrow,
		TestSpace,
	},
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/_bit-dev-themes.scss";

.buttons {
	display: flex;
	flex-direction: column;
}
</style>