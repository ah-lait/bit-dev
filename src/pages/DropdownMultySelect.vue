<template>
	<DropdownMultySelect
		:options="dropdownOptions"
		placeholder="Choose stuff"
		label="Choose an element"
		@valuesChosen="multySelectUpdate"
	/>
</template>

<script>
import DropdownMultySelect from "../../components/dropdown-multy-select/DropdownMultySelect/DropdownMultySelect.vue";
const dropdownOptions = [
	{
		value: "Option 1",
		Id: 1,
	},
	{
		value: "Option 2",
		Id: 2,
	},
	{
		value: "Option 3",
		Id: 3,
	},
	{
		value: "Option 4",
		Id: 4,
	},
	{
		value: "Option 5",
		Id: 5,
	},
];

export default {
	data() {
		return {
			var1: "World",
			dropdownOptions,
		};
	},
	methods: {
		multySelectUpdate(value) {
			return value;
		},
	},
	components: {
		DropdownMultySelect,
	},
};
</script>

<style scoped>
</style>