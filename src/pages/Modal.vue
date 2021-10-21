<template>
  <div>
    <Modal label="This is a modal" :isOpen="isModalOpen" :toggleModal="this.toggleModal">
      <h2 id="modal__label">Modal title</h2>
      <p id="modal__description">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <input type="text" placeholder="bob" />
    </Modal>
    <button @click="toggleModal">Open modal</button>
  </div>
</template>

<script>
import Modal from "../../components/modal/Modal/Modal.vue";

export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  background-color: #4c757f;
  color: #fff;
  padding: 20px 40px;
}
</style>
