<template>
	<div>
		<!-- Opiniated accordion -->
		<!-- <Accordion :items="accordionItems" /> -->

		<!-- Un-opiniated accordion -->
		<AccordionController>
			<template slot-scope="{ activeId }">
				<AccordionSingle
					v-for="(data, index) in accordionItems"
					:key="index"
					:active-id="activeId"
					:id="index"
				>
					<template v-slot:title>{{ data.title }}</template>

					<!-- If nothing is passed to the slots, the component has fallbacks -->
					<template v-slot:icon></template>

					<template v-slot:content>{{ data.text }}</template>
				</AccordionSingle>
			</template>
		</AccordionController>

	</div>
</template>

<script>
// import Accordion from "../../components/accordion/Accordion/Accordion.vue";
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
