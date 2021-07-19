<template>
	<div class="buttons">
		<h3>Button ten</h3>
		<div style="display: flex; margin-top: 50px">
			<ButtonNine id="" aria-label="" class="btn-nine"> 
				Test	
			</ButtonNine>
			<BitButtonTen revert-direction />
			<ButtonTen />
			<IconArrow2 class="icon-arrow-2" />
			<ButtonEight />
		</div>
	</div>
</template>

<script>
import ButtonNine from "../components/buttons/ButtonNine.vue";
import BitButtonTen from "@bit/lait.vue-components.buttons.button-ten";
import IconArrow2 from "../components/svg/IconArrow2.vue";
import ButtonEight from '../components/buttons/ButtonEight.vue';

export default {
	components: {
		ButtonNine,
		BitButtonTen,
		IconArrow2,
		ButtonEight
	},
};
</script>,

<style scoped lang="scss">
@import "@/assets/styles/_bit-dev-themes.scss";

.buttons {
	display: flex;
	flex-direction: column;
}

.btn-nine {
	--bit-btn-text-size: 2.4rem;
	--bit-btn-text-color: pink;
	--bit-btn-color: blue;
}

.icon-arrow-2 {
	--bit-icon-arrow-color: red;
}

</style>