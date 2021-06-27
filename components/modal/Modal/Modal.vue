<template>
	<transition name="animate-modal">
		<div class="modal" v-if="isOpen">
			<div class="modal__backdrop">
				<div
					class="modal__content"
					role="dialog"
					aria-labelledby="modal__label"
					aria-modal="true"
					v-on:keyup.esc="pressEsc"
				>
					<button
						class="modal__close"
						ref="closeModal"
						@click="this.toggleModal"
					></button>
					<div>
						<slot></slot>
						<div @focus="setfocus" tabindex="0"></div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "Modal",
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
	updated: function() {
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
$close-btn-color: #1f393f !default;
$modal-transition: 0.6s cubic-bezier(0.5, 0, 0, 1) !default;

.modal {
	&__content {
		position: relative;
		background-color: $modal-content-bg-color;
		padding: 40px 20px 20px;
		max-height: 80vh;
		max-width: 80vw;
		overflow-y: auto;

		@media only screen and (min-width: 680px) {
			min-height: 300px;
			min-width: 500px;
		}
	}

	&__backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: $modal-backgrop-bg-color;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__close {
		position: absolute;
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
}

// Animations
.animate-modal-enter-active,
.animate-modal-leave-active {
	transition: opacity $modal-transition;
}
.animate-modal-enter,
.animate-modal-leave-to {
	opacity: 0;
}
</style>
