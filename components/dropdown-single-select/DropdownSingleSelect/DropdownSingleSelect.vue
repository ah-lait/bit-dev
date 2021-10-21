<template>
  <div class="dropdown">
    <div :id="labelId" class="dropdown__label">
      {{ label }}
    </div>
    <button :id="buttonId" class="dropdown__toggle" :class="{ 'is-active': showOptions }" ref="toggleButton" @click="toggleDropdown" v-on:keydown.enter.prevent="" v-on:keyup.enter.prevent="toggleDropdown" v-on:keyup.space.prevent="toggleDropdown" v-on:keyup.down.prevent="openDropdown" v-on:keyup.up.prevent="openDropdown" :aria-labelledby="`${labelId} ${buttonId}`" aria-haspopup="listbox" :aria-expanded="showOptions">
      {{ value ? value : placeholder }}
    </button>
    <input ref="input" type="hidden" readonly :value="value" />
    <transition name="grow">
      <ul class="dropdown__options" v-if="showOptions" role="listbox" :aria-labelledby="labelId" :aria-activedescendant="value">
        <li
          class="dropdown__options-item"
          :class="{ 'dropdwon__options-items--selected': item.value === value }"
          :id="item.value"
          v-for="(item, index) in options"
          :key="item.id"
          :ref="'item-' + index"
          tabindex="0"
          @focus="setChosen(item.value, index)"
          @click="chooseValue(item.value, index)"
          v-on:keyup.enter="chooseValue(item.value, index)"
          v-on:keyup.space="chooseValue(item.value, index)"
          v-on:keyup.down="goToNext(index)"
          v-on:keyup.up="goToPrevious(index)"
          v-on:keyup.esc="toggleDropdown"
          v-on:keyup.home="focusFirst"
          v-on:keyup.end="focusLast"
          v-on:keydown.tab="closeDropdown"
          v-on:keydown.tab.prevent
          v-on:keydown.shift.tab.exact="closeDropdown"
          v-on:keydown.shift.tab.exact.prevent
          role="option"
          :aria-selected="item.value === value"
        >
          {{ item.value }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "DropdownSingleSelect",
  props: {
    options: [Array, { value: String, Id: String }],
    placeholder: {
      type: String,
      default: "Vælg værdi",
    },
    label: {
      type: String,
      default: "Vælg værdi",
    },
    buttonId: {
      type: String,
      default: "dropdown-button",
    },
    labelId: {
      type: String,
      default: "dropdown-label",
    },
  },
  data() {
    return {
      showOptions: false,
      chosenIndex: null,
      value: null,
    };
  },
  methods: {
    focusControl() {
      // If the dropdown is visible
      if (this.showOptions) {
        this.$nextTick(() => {
          if (this.value) {
            // If user has chosen a value before, focus on the chosen element.
            this.$refs["item-" + this.chosenIndex][0].focus();
          } else {
            // If no value has been chosen, focus the first element in dropdown
            this.$refs["item-0"][0].focus();
          }
        });
      } else {
        // Set focus on toggle button when dowpdown is closed
        this.$refs.toggleButton.focus();
      }
    },
    toggleDropdown() {
      this.showOptions = !this.showOptions;
      this.focusControl();
    },
    openDropdown() {
      this.showOptions = true;
      this.focusControl();
    },
    closeDropdown() {
      this.showOptions = false;
      this.focusControl();
    },
    setChosen(value, index) {
      // Sets the input value
      this.value = value;
      // Catch the index of the chosen item, used to set focus on the chosen item when
      // dropdown is opened and a value exists.
      this.chosenIndex = index;
      // Emit the event up to parent
      this.$emit("valueChosen", this.value);
    },
    chooseValue(value, index) {
      this.setChosen(value, index);
      this.closeDropdown();
    },
    goToNext(index) {
      // Focus the first element if focus is on the last when down arrow is pressed
      // Else focus next element
      if (index === this.options.length - 1) {
        this.focusFirst();
      } else {
        this.$refs["item-" + (index + 1)][0].focus();
      }
    },
    goToPrevious(index) {
      // Focus the last element if focus is on the first when upp arrow is pressed
      // Else focus previous element
      if (index === 0) {
        this.focusLast();
      } else {
        this.$refs["item-" + (index - 1)][0].focus();
      }
    },
    focusFirst() {
      if (this.showOptions) {
        this.$refs["item-0"][0].focus();
      }
    },
    focusLast() {
      if (this.showOptions) {
        this.$refs["item-" + (this.options.length - 1)][0].focus();
      }
    },
  },
};
</script>

<style scoped lang="scss">
$backgorund-color: #e6e6e6 !default;
$backgorund-color-active: #cdcdcd !default;
$slider-color: #777b7e !default;
$slider-color-hover: #555 !default;

.dropdown {
  max-width: 400px;
  &__label {
    font-size: 2.4rem;
    margin-bottom: 0.5rem;
  }

  &__toggle {
    width: 100%;
    border: none;
    background-color: $backgorund-color;
    font-size: 1.6rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 1.5rem;
    padding-right: 3rem;
    cursor: pointer;
    position: relative;
    text-align: left;
    &:after {
      content: "";
      position: absolute;
      top: 2.5rem;
      right: 1.5rem;
      width: 1.1rem;
      height: 1.1rem;
      background-image: url("chevron.svg");
      background-size: 100% 100%;
      transform: rotate(90deg) scale(1);
      transition: transform 0.4s cubic-bezier(0.218, 0.63, 0.325, 1), -webkit-transform 0.4s cubic-bezier(0.218, 0.63, 0.325, 1);
    }
    &:hover:after {
      transform: rotate(90deg) scale(1.4);
    }
    &.is-active:after {
      transform: rotate(-90deg) scale(1.4);
    }
  }

  &__options {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: $backgorund-color;
    max-height: 20rem;
    overflow-y: auto;
    border: 1px solid $backgorund-color-active;
  }

  &__options-item {
    padding: 2rem 1.5rem;
    font-size: 1.4rem;
    cursor: pointer;
    opacity: 1;

    &:hover,
    &:focus {
      background-color: $backgorund-color-active;
    }
  }

  &__option-items--selected {
    background-color: $backgorund-color-active;
  }
}

.hidden-input {
  display: none;
}

// Scrollbar in dropdown
// width
::-webkit-scrollbar {
  width: 5px;
}

// Track
::-webkit-scrollbar-track {
  background: #fff;
}

// Handle
::-webkit-scrollbar-thumb {
  background: $slider-color;
}

// Handle on hover
::-webkit-scrollbar-thumb:hover {
  background: $slider-color-hover;
}

// Animation
.dropdown__options,
.dropdown__options-item {
  transition: all 0.4s cubic-bezier(0.218, 0.63, 0.325, 1), -webkit-transform 0.4s cubic-bezier(0.218, 0.63, 0.325, 1);
}

.grow-enter,
.grow-leave-to {
  max-height: 0;
}

.grow-enter .dropdown__options-item,
.grow-leave-to .dropdown__options-item {
  opacity: 0;
}
</style>
