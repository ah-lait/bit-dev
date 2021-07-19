<template>
	<button class="btn-moving reset-btn">
		<span class="btn-moving__background"> </span>
		<span class="btn-moving__text">
			<slot></slot>
			<span class="btn-moving__plus">+</span>
		</span>
	</button>
</template> 
<script>
export default {
	name: "ButtonNine",
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

.btn-moving {
	display: flex;
	align-items: center;
	width: max-content;
	position: relative;
	height: var(--bit-btn-size, 4rem);
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;

	&__background {
		position: absolute;
		top: 0;
		background-color: var(--bit-btn-color, #f5f5f5);
		height: var(--bit-btn-size, 4rem);
		width: var(--bit-btn-size, 4rem);
		border-radius: var(--bit-btn-size, 4rem);
		animation: move-background-left
			var(--bit-transition--slow, 0.95s cubic-bezier(0.218, 0.63, 0.325, 1))
			reverse;
		z-index: 0;
	}

	&__text,
	&__plus {
		margin-left: 1.7rem;
		z-index: 1;
	}

	&__text {
		font-size: var(--bit-btn-text-size, 1.7rem);
		color: var(--bit-btn-text-color, black);
	}

	&__plus {
		margin-right: 1.7rem;
	}
}
// hover effect
.btn-moving:hover {
	.btn-moving__background {
		animation: move-background-right
			var(--bit-transition--slow, 0.95s cubic-bezier(0.218, 0.63, 0.325, 1));
		animation-fill-mode: forwards;
	}
}

// keyframes
@keyframes move-background-right {
	0% {
		width: var(--bit-btn-size, 4rem);
		margin-left: 0;
	}

	50% {
		width: 100%;
		margin-left: 0;
	}

	100% {
		width: var(--bit-btn-size, 4rem);
		margin-left: calc(100% - var(--bit-btn-size, 4rem));
	}
}

@keyframes move-background-left {
	0% {
		width: var(--bit-btn-size, 4rem);
		margin-left: 0;
	}

	50% {
		width: 100%;
		margin-left: 0;
	}

	100% {
		width: var(--bit-btn-size, 4rem);
		margin-left: calc(100% - var(--bit-btn-size, 4rem));
	}
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
	.btn-moving__background {
		animation: none;
		transition: width
			var(--bit-transition--slow, 0.95s cubic-bezier(0.218, 0.63, 0.325, 1));
	}

	.btn-moving:hover {
		.btn-moving__background {
			animation: none;
			width: 100%;
		}
	}
}

@supports (-ms-accelerator: true) {
	.btn-moving {
		&__background {
			animation: none;
			transition: width
				var(--bit-transition--slow, 0.95s cubic-bezier(0.218, 0.63, 0.325, 1));
		}
	}

	.btn-moving:hover {
		.btn-moving__background {
			animation: none;
			width: 100%;
		}
	}
}

@supports (-ms-ime-align: auto) {
	.btn-moving__background {
		animation: none;
		transition: width
			var(--bit-transition--slow, 0.95s cubic-bezier(0.218, 0.63, 0.325, 1));
	}

	.btn-moving:hover {
		.btn-moving__background {
			animation: none;
			width: 100%;
		}
	}
}
</style>