<template>
  <transition name="bit-animate-modal" v-if="isOpen">
    <div class="bit-modal" @click.self="toggleModal">
      <div class="bit-modal__content" role="dialog" aria-labelledby="modal__label" :aria-describedby="ariaDescribedBy ? 'modal__description' : null" aria-modal="true" v-on:keyup.esc="pressEsc">
        <button class="bit-modal__close" ref="closeModal" @click="toggleModal" :aria-label="ariaClose"></button>
        <div class="bit-modal__slot-content">
          <slot></slot>
          <div @focus="setfocus" tabindex="0"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    toggleModal: {
      type: Function,
    },
    externalTransition: {
      type: Boolean,
      default: false,
    },
    ariaClose: {
      type: String,
      default: "Luk",
    },
    ariaDescribedBy: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      elementToFocus: {
        type: HTMLElement,
      },
    };
  },
  methods: {
    setfocus() {
      this.$refs.closeModal.focus();
    },
    pressEsc() {
      this.toggleModal();
    },
  },
  updated: function() {
    if (this.isOpen) {
      this.elementToFocus = document.activeElement;
      this.$refs.closeModal.focus();
    } else if (this.elementToFocus instanceof HTMLElement) {
      this.elementToFocus.focus();
    }
  },
};
</script>

<style lang="scss">
// var(--bit-modal-backdrop-bg-color, rgba(0, 0, 0, 0.8));
// var(--bit-modal-content-bg-color, #fff);
// var(--bit-modal-focus-outline, 2px solid #000);
// var(--bit-modal-close-btn-color, #1f393f);
// var(--bit-modal-transition, 0.6s cubic-bezier(0.5, 0, 0, 1));
// var(--bit-modal-content__height, 80vh);
// var(--bit-modal-content__width, 80vw);
// var(--bit-modal-index, 999);

.bit-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--bit-modal-backdrop-color, rgba(0, 0, 0, 0.8));
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--bit-modal-index, 999);

  &__content {
    position: relative;
    background-color: var(--bit-modal-content-bg-color, #fff);
    padding: 40px 20px 20px;
    max-height: var(--bit-modal-content__height, 80vh);
    max-width: var(--bit-modal-content__width, 80vw);
    overflow-y: auto;
  }

  &__close {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    background-color: inherit;
    border: none;
    padding: 0;
    opacity: 0.5;

    &:focus {
      outline: var(--bit-modal-focus-outline, 2px solid #000);
      opacity: 1;
    }

    &:hover,
    &:focus-visible {
      opacity: 1;
    }

    &:before,
    &:after {
      position: absolute;
      left: 7px;
      top: -2px;
      content: " ";
      height: 20px;
      width: 2px;
      background-color: var(--bit-modal-close-btn-color, #1f393f);
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
}

// Animations
.bit-animate-modal-enter-active,
.bit-animate-modal-leave-active {
  transition: opacity var(--bit-modal-transition, 0.6s cubic-bezier(0.5, 0, 0, 1));
}
.bit-animate-modal-enter,
.bit-animate-modal-leave-to {
  opacity: 0;
}
</style>
