<template>
	<div class="bit-accordion">
		<div
			class="bit-accordion__item"
			:class="{ 'is-active active-background': itemOpen === id }"
		>
			<button
				class="
					bit-accordion__item-head
					flex--space-between flex--vertical-center
				"
				:ref="'accordion-button-' + id"
				:id="'accordion-title-' + id"
				type="button"
				:aria-expanded="itemOpen === id ? 'true' : 'false'"
				:aria-controls="'sect-' + id"
				@click="toggleAccordionItem"
			>
				<slot name="title">
					<span class="bit-accordion__item-title">Fallback title</span>
				</slot>

				<slot name="icon">
					<span class="bit-accordion__item-icon"></span>
				</slot>
			</button>
			<div
				class="bit-accordion__item-body"
				:id="'sect-' + id"
				:ref="'accordion-item-' + id"
				role="region"
				:aria-labelledby="'accordion-title-' + id"
			>
				<slot name="content"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Accordion",
	props: {
		id: {
			type: Number || null,
			default: 0,
			required: false,
		},
		activeId: {
			type: Number,
			default: null,
		},
	},
	data() {
		return {
			itemOpen: null,
		};
	},
	mounted() {
		if (this.id === this.activeId) {
			this.itemOpen = true;
			this.toggleAccordionItem();
		}
	},
	watch: {
		activeId: {
			handler: function () {
				// The content area to show
				const element = this.$refs["accordion-item-" + this.id];
				// The title area
				const parent = this.$refs["accordion-button-" + this.id];
				// The accordion wrapper
				const wrapper = element.closest(".bit-accordion__item");
				const parentHeight = parent.clientHeight;
				const contentHeight = element.clientHeight;

				if (this.id === this.activeId) {
					// Start with hiding all content areas to make sure only one is visible at a time
					wrapper.style.height = parentHeight + contentHeight + "px";
					this.itemOpen = this.id;
				} else {
					wrapper.style.height = parentHeight + "px";
					this.itemOpen = null;
				}
			},
		},
	},
	methods: {
		toggleAccordionItem() {
			// The content area to show
			const element = this.$refs["accordion-item-" + this.id];
			// The title area
			const parent = this.$refs["accordion-button-" + this.id];
			// The accordion wrapper
			const wrapper = element.closest(".bit-accordion__item");

			const contentHeight = element.clientHeight;
			const parentHeight = parent.clientHeight;

			// Close accordion if open, else open.
			if (this.itemOpen === this.id) {
				wrapper.style.height = parentHeight + "px";
				this.itemOpen = null;
			} else {
				// Start with hiding all content areas to make sure only one is visible at a time
				wrapper.style.height = parentHeight + contentHeight + "px";
				this.itemOpen = this.id;
			}

			this.$parent.$emit("setActiveAccordion", this.id);
		},
	},
};
</script>

<style lang="scss">
//-
//  Default
//------------------------------------

// accordion required vars
$accordion-spacing: var(--bit-accordion-spacing, 50px);
$accordion-spacing--medium: var(--bit-accordion-spacing--medium, 25px);
$accordion-icon-size: var(--bit-accordion-icon-size, 25px);
$accordion-icon-size--medium: var(--bit-accordion-icon-size--mdium, 15px);
$accordion-icon-color: var(--bit-accordion-icon-color, #1f393f);
$accordion-body-spacing: var(--bit-accordion-body-spacing, 25px);
$accordion-transition: var(
	--bit-accordion-transition,
	0.6s cubic-bezier(0.218, 0.63, 0.325, 1)
);
$accordion-border: var(--bit-accordion-border, 2px solid #1f393f);
$accordion-height: var(--bit-accordion-height, 100px);
// accordion optional vars
$accordion-background-color: var(--bit-accordion--bg-color, transparent);
$accordion-active-background-color: null !default;

.bit-accordion {
	padding: 0;

	// Wrapper
	&__item {
		height: $accordion-height;
		overflow: hidden;
		transition: $accordion-transition;
		margin-bottom: $accordion-spacing--medium;
		background-color: $accordion-background-color;
		border-top: $accordion-border;
		border-bottom: $accordion-border;
		&.is-active .bit-accordion__item-icon:before {
			transform: rotate(0);
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
	}

	// Icon
	&__item-icon {
		display: block;
		position: relative;
		width: $accordion-icon-size;
		height: $accordion-icon-size;

		&:after,
		&:before {
			content: "";
			position: absolute;
			top: 50%;
			background-color: $accordion-icon-color;
			height: 0.4rem;
			width: 100%;
		}

		&:before {
			transform: rotate(90deg);
			transition: $accordion-transition;
		}
	}

	//Content region
	&__item-body {
		padding: $accordion-body-spacing;
		visibility: visible;
	}
}

// Utility
.active-background {
	background-color: $accordion-active-background-color;
}
</style>
