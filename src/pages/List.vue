<template>
  <div class="container">
    <ul class="ul">
      <CheckmarkItem v-for="(item, i) in data" :key="i">
        <template #checkmark-text>
          {{ item.text }}
        </template>
      </CheckmarkItem>
    </ul>
  </div>
</template>

<script>
import CheckmarkItem from "../components/list/checkmarkItem.vue";
export default {
  name: "video-modal-page",
  components: {
    CheckmarkItem,
  },
  data() {
    return {
      data: [{ text: "Praktik fosikring" }, { text: "20% rabat på fagbøger" }, { text: "Login til faglige artikler, måleredskaber og tests" }, { text: "Gratis webinarer, temaaftener og e-learning" }, { text: "Fagbladet fysioterapeuten i in postkasse" }],
    };
  },
};
</script>
<style lang="scss">
.ul {
  list-style-type: none;
  padding-left: 0;
}
</style>
