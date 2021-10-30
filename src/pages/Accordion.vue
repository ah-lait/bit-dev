<template>
	<div class="container">
		<div class="row">
			<!-- Opiniated accordion -->
			<AccordionController>
				<template slot-scope="{ activeId }">
					<AccordionSingle
						v-for="(data, index) in accordionItems"
						:key="index"
						:active-id="activeId"
						:id="index"
					>
						<template #title
							><strong>{{ data.title }}</strong></template
						>

						<!-- If nothing is passed to the slots, the component icon fallback -->
						<template #icon>
							<div class="custom-icon"></div>
						</template>

						<template #content>{{ data.text }}</template>
					</AccordionSingle>
				</template>
			</AccordionController>
		</div>
	</div>
</template>

<script>
import AccordionSingle from "../components/accordions/AccordionSingle.vue";
import AccordionController from "../components/accordions/AccordionController.vue";
const accordionItems = [
	{
		title: "Accordion title",
		text: "Accordiont text",
	},
	{
		title: "Accordion title 2",
		text: "Accordiont text 2",
	},
];
export default {
	data() {
		return {
			accordionItems,
		};
	},
	components: {
		AccordionSingle,
		AccordionController,
	},
};
</script>
<style lang="scss">
.bit-accordion {
	--bit-accordion-height: 80px;
	--bit-accordion-spacing: 0px;
	--bit-accordion-body-spacing: 20px 0 40px 0;
	--bit-accordion-border: none;
	--bit-accordion-spacing--medium: 0;

	&__item {
		border-bottom: 2px solid #bcac99 !important;
	}

	.custom-icon {
		position: relative;
		height: 30px;
		width: 30px;
		background-color: black;
		border-radius: 50%;
		&:after,
		&:before {
			content: "";
			position: absolute;
			top: 50%;
			left: 25%;
			background-color: #fff;
			height: 2px;
			width: 15px;
		}

		&:before {
			transform: rotate(90deg);
			transition: 0.6s cubic-bezier(0.218, 0.63, 0.325, 1);
		}
	}

	&__item.is-active .custom-icon::before {
		transform: rotate(0);
	}
}

@media screen and (max-width: 572px) {
	.bit-accordion {
		--bit-accordion-height: 100px;
	}
}
</style>
