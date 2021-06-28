<template>
	<div class="buttons">
		<h3>Button ten</h3>
		<div style="display: flex; margin-top: 50px">
			<BitButtonTen revert-direction />
			<ButtonTen />
		</div>
	</div>
</template>

<script>
import ButtonTen from "../components/buttons/ButtonTen.vue";
import BitButtonTen from "@bit/lait.button-components.button-ten";

export default {
	components: {
		ButtonTen,
		BitButtonTen,
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