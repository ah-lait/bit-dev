<template>
	<div class="v-modal-wrapper">
		<transition name="v-modal">
			<div class="v-modal__bg" v-if="isOpen"></div>
		</transition>
		<transition name="v-modal-close">
			<button
				v-if="isOpen"
				ref="closeModal"
				class="v-modal__close"
				@click="toggleModal"
			></button>
		</transition>
		<transition name="v-modal-video">
			<div class="v-modal__player" v-if="isOpen">
				<slot></slot>
			</div>
		</transition>
		<div ref="lastElement" @focus="setfocus" tabindex="0"></div>
	</div>
</template>

<script>
export default {
	name: "VideoModal",
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		},
		toggleModal: {
			type: Function,
		},
	},
	data() {
		return {};
	},
	methods: {
		setfocus() {
			this.$refs.closeModal.focus();
		},
		pressEsc() {
			this.toggleModal();
		},
	},
	updated: function () {
		if (this.isOpen) {
			this.$refs.closeModal.focus();
		}
	},
};
</script>

<style scoped lang="scss">
$modal-backgrop-bg-color: rgba(0, 0, 0, 0.8) !default;
$modal-content-bg-color: #fff !default;
$focus-outline: 2px solid #000 !default;
$close-btn-color: #fff !default;
$modal-transition: 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) !default;

.v-modal-wrapper {
	position: absolute;
	z-index: 99;
}

.v-modal {
	&__bg {
		&:before {
			content: "";
			position: fixed;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			background-color: $modal-backgrop-bg-color;
			transform: scaleY(1);
			transform-origin: center bottom;
		}
	}

	&__close {
		position: fixed;
		right: 15px;
		top: 15px;
		width: 16px;
		height: 16px;
		cursor: pointer;
		background-color: inherit;
		border: none;
		padding: 0;
		opacity: 0.5;

		&:focus {
			outline: $focus-outline;
			opacity: 1;
		}

		&:hover,
		&:focus-visible {
			opacity: 1;
		}

		&:before,
		&:after {
			position: absolute;
			left: 7px;
			top: -2px;
			content: " ";
			height: 20px;
			width: 2px;
			background-color: $close-btn-color;
		}

		&:before {
			transform: rotate(45deg);
		}

		&:after {
			transform: rotate(-45deg);
		}
	}

	&__player {
		position: fixed;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		top: 50%;
		display: block;

		&:before {
			display: block;
			padding-bottom: 56.25%; // 16:9 ratio
			width: 100%;
			content: "";
		}
	}
}

//------------
// Animations
//------------

// Background
.v-modal-enter-active,
.v-modal-leave-active {
	transition: transform $modal-transition;
	&:before {
		content: "";
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background-color: $modal-backgrop-bg-color;
		transition: transform $modal-transition;
	}
}

.v-modal-enter-to {
	&:before {
		transform: scaleY(1);
		transform-origin: center bottom;
	}
}

.v-modal-enter,
.v-modal-leave-to {
	&:before {
		transform-origin: center top;
		transform: scaleY(0);
	}
}

// Close button
.v-modal-close-enter-active,
.v-modal-close-leave-active {
	transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
		transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.v-modal-close-enter-to {
}

.v-modal-close-enter,
.v-modal-close-leave-to {
	opacity: 0;
	transform: translateY(-120px);
}

// Video container

.v-modal-video-enter-active,
.v-modal-video-leave-active {
	transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1),
		transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
	transform: translate(-50%, -50%) translateY(25%);
}

.v-modal-video-enter-active {
	transition-delay: 0.8s;
}

.v-modal-video-enter-to {
	transform: translate(-50%, -50%);
}

.v-modal-video-enter,
.v-modal-video-leave-to {
	opacity: 0;
}

.v-modal-video-leave-to {
	transform: translate(-50%, -50%) translateY(-25%);
}
</style>

<!-- Seperat unscoped style tag because scoped styles 
do not apply to content inserted using <slot></slot> -->
<style lang="scss">
.v-modal__player {
	iframe {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		vertical-align: middle;
	}
}
</style>
