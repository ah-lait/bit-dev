<template>
	<div class="accordion">
		<div
			class="accordion__item"
			:class="{ 'is-active active-background': itemOpen === index }"
			v-for="(item, index) in items"
			:key="index"
		>
			<h3 @click="toggleAccordionItem(index)">
				<button
					class="accordion__item-head flex--space-between flex--vertical-center"
					:id="'accordion-title-' + index"
					type="button"
					:aria-expanded="itemOpen === index ? 'true' : 'false'"
					:aria-controls="'sect-' + index"
				>
					<span class="accordion__item-title">{{ item.title }}</span
					><span class="accordion__item-icon"></span>
				</button>
			</h3>
			<div
				class="accordion__item-body"
				:id="'sect-' + index"
				:ref="'accordion-item-' + index"
				role="region"
				:aria-labelledby="'accordion-title-' + index"
			>
				<p>{{ item.text }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Accordion",
	props: {
		items: [Array, { title: String, text: String }],
	},
	data() {
		return {
			itemOpen: null,
		};
	},
	methods: {
		toggleAccordionItem(index) {
			// The content area to show
			const element = this.$refs["accordion-item-" + index][0];
			// The item wrapper
			const parent = element.closest(".accordion__item");

			const elementHeight = element.clientHeight;
			const parentHeight = parent.clientHeight;
			this.closeAll();
			// Close accordion if open, else open.
			if (this.itemOpen === index) {
				parent.style.height = parentHeight - elementHeight + "px";
				this.itemOpen = null;
			} else {
				// Start with hiding all content areas to make sure only one is visible at a time
				parent.style.height = parentHeight + elementHeight + "px";
				this.itemOpen = index;
			}
		},
		closeAll() {
			// Getting all item wrappers
			const allParents = document.querySelectorAll(".accordion__item");

			// Hide all content areas
			allParents.forEach((el) => {
				el.style.removeProperty("height");
			});
		},
	},
};
</script>

<style scoped lang="scss">
//-
//  Default
//------------------------------------

// accordion required vars
$accordion-spacing: 5rem !default;
$accordion-spacing--medium: 2.5rem !default;
$accordion-icon-size: 3rem !default;
$accordion-icon-size--medium: 1.5rem !default;
$accordion-icon-color: #1f393f !default;
$accordion-transition: 0.6s cubic-bezier(0.218, 0.63, 0.325, 1) !default;
$accordion-border: 2px solid #1f393f !default;
$accordion-height: 10rem !default;
$accordion-height-mobile: calc(#{$accordion-height} - 2rem) !default;
// accordion optional vars
$accordion-background-color: null !default;
$accordion-active-background-color: null !default;

.accordion {
	padding: 0;

	// Wrapper
	&__item {
		height: $accordion-height;
		overflow: hidden;
		transition: $accordion-transition;
		margin-bottom: $accordion-spacing--medium;
		background-color: #fff;
		border-top: $accordion-border;
		border-bottom: $accordion-border;
		&.is-active .accordion__item-icon:before {
			transform: rotate(0);
		}
		@media only screen and (max-width: 992px) {
			margin-bottom: 1.5rem;
			height: $accordion-height-mobile;
		}
	}

	// Header
	&__item-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		height: $accordion-height;
		padding-left: $accordion-spacing;
		padding-right: $accordion-spacing;
		width: 100%;
		text-align: left;
		background-color: transparent;
		border-left: 2px solid transparent;
		border-right: 2px solid transparent;
		border-top: 0;
		border-bottom: 0;

		&:focus {
			outline: none;
		}

		&:focus-visible {
			outline: none;
			border-width: 2px;
			border-style: outset;
			border-color: #000;
		}

		@media only screen and (max-width: 992px) {
			height: $accordion-height-mobile;
			padding-left: $accordion-spacing--medium;
			padding-right: $accordion-spacing--medium;
		}
	}

	// Icon
	&__item-icon {
		display: block;
		margin-top: 3rem;
		position: relative;
		width: $accordion-icon-size;
		height: $accordion-icon-size;

		&:after,
		&:before {
			content: "";
			position: absolute;
			top: 0;
			background-color: $accordion-icon-color;
			height: 0.4rem;
			width: 100%;
			@media only screen and (max-width: 992px) {
				height: 0.3rem;
			}
		}

		&:before {
			transform: rotate(90deg);
			transition: $accordion-transition;
		}

		@media only screen and (max-width: 992px) {
			margin-top: 1.6rem;
			width: $accordion-icon-size--medium;
			height: $accordion-icon-size--medium;
		}
	}

	//Content region
	&__item-body {
		padding: $accordion-spacing;
		visibilty: visible;
		@media only screen and (max-width: 992px) {
			padding: $accordion-spacing--medium;
			padding-top: 0;
		}
	}

	&__item-title {
		@media only screen and (max-width: 992px) {
			font-size: 2.1rem;
		}
	}
}

// Utility
.active-background {
	background-color: $accordion-active-background-color;
}
</style>
