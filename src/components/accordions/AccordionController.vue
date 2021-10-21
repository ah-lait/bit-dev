<template>
  <div class="accordion-controller">
    <slot :active-id="activeId" />
  </div>
</template>
<script>
export default {
  name: "AccordionController",
  props: {
    defaultActive: {
      type: Number || null,
      defalut: null,
      required: false,
    },
  },
  data() {
    return {
      activeId: 1,
    };
  },
  mounted() {
    if (this.defaultActive !== null) {
      this.activeId = this.defaultActive;
    }

    this.$on("setActiveAccordion", (id) => {
      if (id === this.activeId) {
        this.activeId = null;
      } else {
        this.activeId = id;
      }
    });
  },
};
</script>
