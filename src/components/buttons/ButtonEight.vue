<template>
	<button class="btn-eight">
		<IconArrow class="btn-eight__icon" />
		<span class="btn-eight__text">
			<slot></slot>
		</span>
	</button>
</template> 
<script>
import IconArrow from "@bit/lait.svg-components.icon-arrow-2";

export default {
	name: "ButtonEight",
	components: {
		IconArrow,
	},
};
</script>
<style lang="scss">
/* CONTROLLABLE VARIABLES

 --bit-btn-color 					- default: #fff
 --bit-btn-border-color 	- default: #000
 --bit-arrow-size 				- default: 2.4rem
 --bit-transition					- default: 0.4s cubic-bezier(0.218, 0.63, 0.325, 1)
 --bit-transition--fast		- default: 0.4s cubic-bezier(0.218, 0.63, 0.325, 1)

*/

.btn-eight {
	cursor: pointer;
	&__icon {
		height: 1.7rem;
		margin-top: 0.4rem;
		fill: var(--bit-btn-color, #000);
		margin-right: 2rem;
		transition: var(
			--bit-btn-transition-fast,
			0.4s cubic-bezier(0.218, 0.63, 0.325, 1)
		);
	}

	&__text {
		display: inline-block;
		font-size: 2.2rem;
		color: var(--bit-btn-color, #000);
		white-space: nowrap;
		transition: var(
			--bit-btn-transition-fast,
			0.4s cubic-bezier(0.218, 0.63, 0.325, 1)
		);
	}
}
// hover effect
.btn-eight:hover {
	.btn-eight__icon {
		transform: translateX(2.5rem);
		fill: var(--bit-btn-hover-color, #1341bb);
	}

	.btn-eight__text {
		transform: translateX(2rem);
		color: var(--bit-btn-hover-color, #1341bb);
	}
}
</style>