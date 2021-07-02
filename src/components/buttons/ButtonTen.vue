<template>
	<div class="">
		<button
			class="pulse-btn flex--center-center"
			:class="{ 'pulse-btn--revert': revertDirection }"
		>
			<IconArrow class="pulse-btn__arrow" />
		</button>
	</div>
</template> 
<script>
import IconArrow from "@bit/lait.svg-components.icon-arrow";

export default {
	name: "Button",
	components: {
		IconArrow,
	},
	props: {
		revertDirection: {
			type: Boolean,
			default: false,
		},
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

.pulse-btn {
	position: relative;
	height: 6rem;
	width: 6rem;
	border-radius: 50%;
	margin-right: 2rem;
	border: 0;
	background-color: var(--bit-btn-color, #fff);
	display: flex;
	justify-content: center;
	align-items: center;
	// border
	&:after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: 50%;
		border: 2px solid var(--bit-btn-border-color, #000);
		transition: var(--bit-transition, 0.4s cubic-bezier(0.218, 0.63, 0.325, 1));
	}
	// background
	&:before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: 50%;
		background-color: var(--bit-btn-border-color, #000);
		opacity: 0;
		transform: scale(0);
		transition: var(--bit-transition, 0.4s cubic-bezier(0.218, 0.63, 0.325, 1));
	}
	// icon in center
	&__arrow {
		display: block;
		height: var(--bit-arrow-size, 2.4rem);
		width: var(--bit-arrow-size, 2.4rem);
		background-size: var(--bit-arrow-size, 2.4rem) var(--bit-arrow-size, 2.4rem);
		transition: var(
			--bit-transition--fast,
			0.4s cubic-bezier(0.218, 0.63, 0.325, 1)
		);
		z-index: 1;
		fill: var(--bit-btn-border-color, #000);
	}
}
// hover
.pulse-btn:hover {
	.pulse-btn__arrow {
		fill: var(--bit-button-color, #fff);
	}

	// border
	&:after {
		opacity: 0;
		transform: scale(1.3);
	}
	// background
	&:before {
		opacity: 1;
		transform: scale(1);
	}
}
// modifiers
.pulse-btn--revert {
	.pulse-btn__arrow {
		transform: rotate(180deg);
	}
}
</style>