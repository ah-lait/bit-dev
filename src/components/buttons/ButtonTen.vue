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
$pulse-arrow-size: 2.4rem !default;
$button-color: #fff !default;
$button-border-color: #000 !default;
$transition: 0.6s cubic-bezier(0.218, 0.63, 0.325, 1) !default;
$transition--fast: 0.4s cubic-bezier(0.218, 0.63, 0.325, 1) !default;
.pulse-btn {
	position: relative;
	height: 6rem;
	width: 6rem;
	border-radius: 50%;
	margin-right: 2rem;
	border: 0;
	background-color: $button-color;
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
		border: 2px solid $button-border-color;
		transition: $transition--fast;
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
		background-color: $button-border-color;
		opacity: 0;
		transform: scale(0);
		transition: $transition;
	}
	// icon in center
	&__arrow {
		display: block;
		height: $pulse-arrow-size;
		width: $pulse-arrow-size;
		background-size: $pulse-arrow-size $pulse-arrow-size;
		transition: $transition--fast;
		z-index: 1;
		fill: $button-border-color;
	}
}
// hover
.pulse-btn:hover {
	.pulse-btn__arrow {
		fill: $button-color;
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