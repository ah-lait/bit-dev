<template>
  <div>
    <!-- Opiniated accordion -->
    <AccordionController>
      <template slot-scope="{ activeId }">
        <AccordionSingle v-for="(data, index) in accordionItems" :key="index" :active-id="activeId" :id="index">
          <template #title>{{ data.title }}</template>

          <!-- If nothing is passed to the slots, the component icon fallback -->
          <template #icon></template>

          <template #content>{{ data.text }}</template>
        </AccordionSingle>
      </template>
    </AccordionController>
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
