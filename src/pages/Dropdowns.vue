<template>
  <div>
    <DropdownMultySelect :options="dropdownOptions" placeholder="Choose stuff" label="Choose an element" @values-chosen="multySelectUpdate" />
    <DropdownSingleSelect :options="dropdownOptions" placeholder="Choose stuff" label="Choose an element" @value-hosen="singleSelectUpdate" />
    <DropdownSearchSingleSelect :options="dropdownOptions" @value-chosen="singleSearchSelectUpdate" />
  </div>
</template>

<script>
import DropdownMultySelect from "../../components/dropdown-multy-select/DropdownMultySelect/DropdownMultySelect.vue";
import DropdownSearchSingleSelect from "../../components/dropdown-search-single-select/DropdownSearchSingleSelect/DropdownSearchSingleSelect.vue";
import DropdownSingleSelect from "../../components/dropdown-single-select/DropdownSingleSelect/DropdownSingleSelect.vue";
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
    singleSearchSelectUpdate(value) {
      return value;
    },
    singleSelectUpdate(value) {
      this.var1 = value;
    },
  },
  components: {
    DropdownMultySelect,
    DropdownSearchSingleSelect,
    DropdownSingleSelect,
  },
};
</script>

<style scoped></style>
