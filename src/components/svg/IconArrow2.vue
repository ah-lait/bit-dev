<template>
	<svg
		class="svg-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 268.8 268.8"
	>
		<path
			d="M265.2 125.6l-80-80c-4.9-4.9-12.8-4.9-17.7 0 -4.9 4.9-4.9 12.8 0 17.7l58.7 58.7H12.5c-6.9 0-12.5 5.6-12.5 12.5 0 6.9 5.6 12.5 12.5 12.5h213.7l-58.7 58.7c-4.9 4.9-4.9 12.8 0 17.7 2.4 2.4 5.6 3.7 8.8 3.7s6.4-1.2 8.8-3.7l80-80C270.1 138.4 270.1 130.5 265.2 125.6z"
		/>
	</svg>
</template>

<script>
export default {
	name: "IconArrow",
};
</script>

<style lang="scss" scoped>
/* CONTROLLABLE VARIABLES
 --bit-icon-arrow-color 					- default: #000
 --bit-icon-arrow-hover-color 		- default: #000
 --bit-icon-arrow-transition 			- default: 0.4s cubic-bezier(0.218, 0.63, 0.325, 1)
 --bit-icon-arrow-height 					- default: 12px
 --bit-icon-arrow-width 					- default: 25px
*/

.svg-icon {
	fill: var(--bit-icon-arrow-color, #000);
	height: var(--bit-icon-arrow-height, 12px);
	width: var(--bit-icon-arrow-width, 25px);
	transition: var(--bit-transition, 0.4s cubic-bezier(0.218, 0.63, 0.325, 1));

	&:hover {
		fill: var(--bit-icon-arrow-hover, #000);
	}
}
</style>