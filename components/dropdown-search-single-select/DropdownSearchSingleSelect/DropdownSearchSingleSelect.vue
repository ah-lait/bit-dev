<template>
	<div class="dropdown">
		<label :id="labelId" class="dropdown__label">
			{{ label }}
		</label>
		<div
			class="dropdown__form-wrapper"
			role="combobox"
			:aria-expanded="showOptions"
			:aria-owns="listboxId"
			aria-haspopup="listbox"
			:id="comboboxId"
		>
			<div class="dropdown__header" :class="{ 'is-active': !showOptions }">
				<button
					class="dropdown__toggle-button"
					ref="toggleButton"
					@click="openDropdown"
					v-on:keydown.enter.prevent=""
					v-on:keyup.enter.prevent="openDropdown"
					v-on:keyup.space.prevent="openDropdown"
					v-on:keyup.down.prevent="openDropdown"
					v-on:keyup.up.prevent="openDropdown"
					:aria-label="buttonLabel"
				>
					{{ valueText ? valueText : placeholder }}
				</button>

				<input
					:id="inputId"
					class="dropdown__search-input"
					ref="input"
					v-model="searchValue"
					:name="inputName"
					@blur="closeDropdown"
					v-on:keyup.enter="chooseValue"
					v-on:keydown.down="goToNext"
					v-on:keydown.up="goToPrevious"
					v-on:keydown.tab.prevent="goToNext"
					v-on:keydown.shift.tab.exact.prevent="goToPrevious"
					v-on:keyup.home="goToFirst"
					v-on:keyup.end="goToLast"
					v-on:keyup.esc="closeDropdown"
					autocomplete="off"
					:tabindex="showOptions ? 0 : -1"
					:aria-expanded="showOptions"
					:aria-controls="listboxId"
					:aria-labelledby="labelId"
					:aria-activedescendant="value"
				/>
			</div>

			<transition name="grow">
				<ul
					:id="listboxId"
					class="dropdown__options"
					v-if="showOptions"
					tabindex="-1"
					role="listbox"
					:aria-labelledby="labelId"
				>
					<li
						class="dropdown__options-item"
						:class="{ 'dropdown__options-items--selected': index === chosenIndex }"
						:id="item.Value"
						v-for="(item, index) in filteredOptions"
						:key="item.Value"
						tabindex="0"
						:ref="'item-' + index"
						@click="setValue(item)"
					>
						{{ item.Text }}
					</li>
				</ul>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: "DropdownSearchSingleSelect",
	props: {
		options: [Array, { Text: String, Value: String }],
		placeholder: {
			type: String,
			default: "Vælg værdi",
		},
		comboboxId: {
			type: String,
			default: "dropdown-combobox",
		},
		listboxId: {
			type: String,
			default: "dropdown-listbox",
		},
		inputId: {
			type: String,
			default: "search-input",
		},
		label: {
			type: String,
			default: "Vælg værdi",
		},
		labelId: {
			type: String,
			default: "dropdown-label",
		},
		buttonLabel: {
			type: String,
			default: "Vis indstillinger",
		},
		inputName: {
			type: String,
			default: "search-input-name",
		},
	},
	data() {
		return {
			showOptions: false,
			chosenIndex: null,
			value: null,
			valueText: "",
			searchValue: "",
		};
	},
	computed: {
		filteredOptions() {
			if (this.searchValue !== "") {
				return this.options.filter((item) => item.Text.includes(this.searchValue));
			}
			return this.options;
		},
		optionsLength() {
			return this.filteredOptions.length - 1;
		},
	},
	methods: {
		openDropdown() {
			this.searchValue = "";
			this.showOptions = true;
			this.$refs.input.focus();
			this.chosenIndex = null;
		},
		closeDropdown() {
			this.showOptions = false;
			this.$refs.toggleButton.focus();
			this.searchValue = this.value;
		},
		setValue(item) {
			this.value = item.Value;
			this.valueText = item.Text;
			this.$emit("valueChosen", this.value);
			this.closeDropdown();
		},
		chooseValue() {
			if (this.chosenIndex !== null) {
				this.value = this.filteredOptions[this.chosenIndex].Value;
				this.valueText = this.filteredOptions[this.chosenIndex].Text;
				this.$emit("valueChosen", this.value);
				this.closeDropdown();
			}
		},
		goToNext() {
			// Focus the first element if focus is on the last when down arrow is pressed
			// Else focus next element
			if (
				this.optionsLength === 0 ||
				this.chosenIndex === this.optionsLength ||
				this.chosenIndex === null
			) {
				this.chosenIndex = 0;
			} else {
				this.chosenIndex++;
			}
		},
		goToPrevious() {
			// Focus the last element if focus is on the first when upp arrow is pressed
			// Else focus previous element
			if (
				this.optionsLength === 0 ||
				this.chosenIndex === 0 ||
				this.chosenIndex === null
			) {
				this.chosenIndex = this.optionsLength;
			} else {
				this.chosenIndex--;
			}
		},
		goToLast() {
			this.chosenIndex = this.optionsLength;
		},
		goToFirst() {
			this.chosenIndex = 0;
		},
	},
};
</script>

<style scoped lang="scss">
$backgorund-color: #fff !default;
$backgorund-color-active: #cdcdcd !default;
$slider-color: #777b7e !default;
$slider-color-hover: #555 !default;

.dropdown {
	max-width: 400px;
	position: relative;

	&__form-wrapper {
		border: 2px solid $backgorund-color-active;
	}

	&__label {
		font-size: 2.4rem;
		margin-bottom: 0.5rem;
	}

	&__header {
		position: relative;
		&:after {
			content: "";
			position: absolute;
			z-index: 2;
			top: 2.5rem;
			right: 1.5rem;
			width: 1.1rem;
			height: 1.1rem;
			background-image: url("chevron.svg");
			background-size: 100% 100%;
			transform: rotate(-90deg);
			transition: transform 0.4s cubic-bezier(0.218, 0.63, 0.325, 1),
				-webkit-transform 0.4s cubic-bezier(0.218, 0.63, 0.325, 1);
		}

		&.is-active {
			.dropdown__toggle-button {
				z-index: 1;
			}
			&:after {
				transform: rotate(90deg);
			}
		}
	}

	&__toggle-button {
		position: absolute;
		z-index: -1;
		width: 100%;
		border: none;
		background-color: $backgorund-color;
		font-size: 1.6rem;
		padding-top: 2rem;
		padding-bottom: 2rem;
		padding-left: 1.5rem;
		padding-right: 3rem;
		cursor: pointer;
		text-align: left;
	}

	&__search-input {
		border: none;
		background-color: $backgorund-color;
		font-size: 1.6rem;
		padding-top: 2rem;
		padding-bottom: 2rem;
		padding-left: 1.5rem;
		padding-right: 3rem;
		cursor: pointer;
		width: calc(100% - 4.5rem);
	}

	&__options {
		list-style: none;
		margin: 0;
		padding: 0;
		background-color: $backgorund-color;
		max-height: 20rem;
		overflow-y: auto;
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

	&__options-items--selected {
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
	transition: all 0.4s cubic-bezier(0.218, 0.63, 0.325, 1),
		-webkit-transform 0.4s cubic-bezier(0.218, 0.63, 0.325, 1);
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
