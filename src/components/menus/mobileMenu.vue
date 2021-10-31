<template>
  <div :class="{ 'is-active': isOpen }" class="bit-devices-menu">
    <div class="bit-devices-menu__icon" @click="setMenu">
      <slot name="menu-icon" />
    </div>
    <nav :class="{ 'is-active': isOpen }" class="bit-devices-menu-overlay" ref="bitMenu">
      <div>
        <div class="bit-devices-menu-overlay__top-wrapper">
          <div class="bit-devices-menu-overlay__logo">
            <slot name="menu-icon-logo" />
          </div>
          <div @click="setMenu" class="bit-devices-menu-overlay__close-icon">
            <slot name="menu-icon-close">
              <IconClose />
            </slot>
          </div>
        </div>
      </div>
      <div class="bit-devices-menu-overlay__content-wrapper">
        <slot name="menu-content">
          content
        </slot>
      </div>
    </nav>
    <transition name="bit-fade">
      <div @click="setMenu" v-if="isOpen" class="bit-devices-overlay"></div>
    </transition>
  </div>
</template>

<script>
import IconClose from "@bit/lait.svg-components.icon-close";
export default {
  name: "MobileMenu",
  props: {
    contentToMove: {
      type: String,
      required: false,
      default: null,
    },
  },
  components: {
    IconClose,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    const content = this.contentToMove ? this.contentToMove.split(" ") : null;
    if (content) {
      content.forEach((value) => {
        const el = document.querySelector(value);
        if (el) {
          el.classList.add("bit-menu-move");
        }
      });
    }
  },
  methods: {
    setMenu() {
      this.isOpen = !this.isOpen;

      const content = this.contentToMove ? this.contentToMove.split(" ") : null;
      if (content) {
        content.forEach((value) => {
          const el = document.querySelector(value);
          if (el) {
            el.classList.toggle("is-active");
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">
body {
  overflow: hidden;
}

$menu-width: var(--bit-device-width, 50vw);
$menu-width-neg: calc(var(--bit-device-width, 50vw) * -1);
$menu-mobile-width: var(--bit-device-mobile-width, 100vw);
$menu-mobile-width-neg: calc(var(--bit-device-mobile-width, 100vw) * -1);

.bit-devices-menu-overlay {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: $menu-width-neg;
  height: 100vh;
  width: $menu-width;
  background-color: #e6e6e6;
  transition: transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 1;
  padding: 40px;

  &.is-active {
    transform: translateX(0);
  }

  &__top-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__content-wrapper {
    padding-top: 40px;
  }
}

.bit-menu-move {
  transition: transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  &.is-active {
    transform: translateX($menu-width-neg);
  }
}

.bit-devices-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transition-delay: 0.15s !important;
  transition: opacity 0.8s cubic-bezier(0.218, 0.63, 0.325, 1);
  background-color: #1c1d1e;
  opacity: 0.8;
}

.bit-fade-enter-active,
.bit-fade-leave-active {
  transition-delay: 0.15s !important;
  transition: opacity 0.6s ease;
}
.bit-fade-enter, .bit-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media screen and (max-width: 572px) {
  .bit-devices-menu-overlay {
    width: $menu-mobile-width;
    right: $menu-mobile-width-neg;
  }

  .bit-menu-move.is-active {
    transform: translateX($menu-mobile-width-neg);
  }
}
</style>
