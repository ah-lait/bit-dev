<template>
	<Accordion :items="accordionItems" />
</template>

<script>
import Accordion from "../../components/accordion/Accordion/Accordion.vue";
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
		Accordion,
	},
};
</script>

<style>
h3 {
	margin: 0;
}
</style>