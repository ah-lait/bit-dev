<template>
	<DropdownSearchSingleSelect
		:options="searchDropdownOptions"
		@valueChosen="singleSearchSelectUpdate"
	/>
</template>

<script>
import DropdownSearchSingleSelect from "../../components/dropdown-search-single-select/DropdownSearchSingleSelect/DropdownSearchSingleSelect.vue";
const searchDropdownOptions = [
	{
		Text: "Lorem",
		Value: 1,
	},
	{
		Text: "Loremus",
		Value: 2,
	},
	{
		Text: "Samsam",
		Value: 3,
	},
	{
		Text: "Ken",
		Value: 4,
	},
	{
		Text: "Kenny",
		Value: 5,
	},
];
export default {
	data() {
		return {
			searchDropdownOptions,
		};
	},
	components: {
		DropdownSearchSingleSelect,
	},
	methods: {
		singleSearchSelectUpdate(value) {
			return value;
		},
	},
};
</script>

<style scoped>
</style>