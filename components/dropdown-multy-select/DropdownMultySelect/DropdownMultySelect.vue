<template>
	<div class="dropdown">
		<div :id="labelId">
			{{ label }}
		</div>
		<button
			:id="buttonId"
			class="dropdown__toggle"
			:class="{ 'is-active': showOptions }"
			ref="toggleButton"
			@click="toggleDropdown"
			v-on:keydown.enter.prevent=""
			v-on:keyup.enter.prevent="toggleDropdown"
			v-on:keyup.space.prevent="toggleDropdown"
			v-on:keyup.down.prevent="openDropdown"
			v-on:keyup.up.prevent="openDropdown"
			:aria-labelledby="`${labelId} ${buttonId}`"
			aria-haspopup="listbox"
			:aria-expanded="showOptions"
		>
			{{ placeholder }}
		</button>
		<transition name="grow">
			<ul
				class="dropdown__options"
				v-if="showOptions"
				tabindex="-1"
				role="listbox"
				aria-labelledby="dropdown-label"
				aria-multiselectable="true"
			>
				<li
					class="dropdown__options-item"
					v-for="(item, index) in options"
					:key="item.id"
				>
					<input
						:id="item.Id"
						class="dropdown__options-item-input"
						type="checkbox"
						:name="item.value"
						:value="item.value"
						v-model="values"
						:ref="'input-' + index"
					/>
					<label
						class="dropdown__options-item-label"
						:for="item.Id"
						tabindex="0"
						@click="setIndex(index)"
						v-on:keyup.down="goToNext(index)"
						v-on:keyup.up="goToPrevious(index)"
						v-on:keyup.esc="toggleDropdown"
						v-on:keyup.home="focusFirst"
						v-on:keyup.end="focusLast"
						v-on:keyup.enter="toggleCheckbox(index)"
						v-on:keyup.space.prevent="toggleCheckbox(index)"
						v-on:keydown.space.prevent=""
						:ref="'label-' + index"
						role="option"
						:aria-selected="values.includes(item.value)"
					>
						{{ item.value }}
					</label>
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
export default {
	name: "DropdownMultySelect",
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
			index: null,
			focus: null,
			values: [],
			ixArr: [],
		};
	},
	methods: {
		focusControl() {
			// If the dropdown is visible
			if (this.showOptions) {
				this.$nextTick(() => {
					if (this.ixArr.length > 0) {
						// If user has chosen a value before, focus on the fist chosen element.
						var min = Math.min(...this.ixArr);
						console.log(min);
						this.$refs["label-" + min][0].focus();
						this.focus = min;
					} else {
						// If no value has been chosen, focus the first element in dropdown
						this.$refs["label-0"][0].focus();
						this.focus = 0;
					}
				});
			} else {
				// Set focus on toggle button when dowpdown is closes
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
		setChosen(index) {
			// Catch the index of the chosen item, used to set focus on the chosen item when
			// dropdown is opened and a value exists
			this.index = index;
			// Emit the event up to parent
			this.$emit("valuesChosen", this.values);
		},
		goToNext(index) {
			// Focus the first element if focus is on the last when down arrow is pressed
			// Else focus next element
			if (index === this.options.length - 1) {
				this.focusFirst();
			} else {
				this.$refs["label-" + (index + 1)][0].focus();
			}
		},
		goToPrevious(index) {
			// Focus the last element if focus is on the first when upp arrow is pressed
			// Else focus previous element
			if (index === 0) {
				this.focusLast();
			} else {
				this.$refs["label-" + (index - 1)][0].focus();
			}
		},
		focusFirst() {
			if (this.showOptions) {
				this.$refs["label-0"][0].focus();
			}
		},
		focusLast() {
			if (this.showOptions) {
				this.$refs["label-" + (this.options.length - 1)][0].focus();
			}
		},
		toggleCheckbox(index) {
			this.$refs["input-" + index][0].click();
			this.setIndex(index);
		},
		setIndex(index) {
			if (this.ixArr.includes(index)) {
				for (var i = 0; i < this.ixArr.length; i++) {
					if (this.ixArr[i] === index) {
						this.ixArr.splice(i, 1);
					}
				}
			} else {
				this.ixArr.push(index);
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
$checkbox-color: #555 !default;

#dropdown-label {
	font-size: 2.4rem;
	margin-bottom: 0.5rem;
}

.dropdown {
	max-width: 400px;
}

.dropdown__toggle {
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
		transition: transform 0.4s cubic-bezier(0.218, 0.63, 0.325, 1),
			-webkit-transform 0.4s cubic-bezier(0.218, 0.63, 0.325, 1);
	}
}

.dropdown__toggle:hover:after {
	transform: rotate(90deg) scale(1.4);
}

.dropdown__toggle.is-active:after {
	transform: rotate(-90deg) scale(1.4);
}

.dropdown__options {
	list-style: none;
	margin: 0;
	padding: 0;
	background-color: $backgorund-color;
	max-height: 20rem;
	overflow-y: auto;
	border: 1px solid $backgorund-color-active;
}

.dropdown__options-item {
	position: relative;
}

.dropdown__options-item-input {
	display: none;
	position: absolute;
}

.dropdown__options-item-label {
	display: block;
	padding-top: 2rem;
	padding-bottom: 2rem;
	padding-left: 5.5rem;
	padding-right: 1.5rem;
	font-size: 1.4rem;
	cursor: pointer;
	opacity: 1;
}

.dropdown__options-item-label:after,
.dropdown__options-item-label:before {
	content: "";
	position: absolute;
	-webkit-transition: 0.6s cubic-bezier(0.218, 0.63, 0.325, 1);
	transition: 0.6s cubic-bezier(0.218, 0.63, 0.325, 1);
}

.dropdown__options-item-label:before {
	background-image: url(checkmark.svg);
	background-size: 100% 100%;
	width: 1rem;
	height: 1.2rem;
	top: 50%;
	left: 2.2rem;
	opacity: 0;
	transform: scale(0) translateY(-50%);
	z-index: 1;
}

.dropdown__options-item-label:after {
	top: 50%;
	transform: translateY(-50%);
	left: 1.5rem;
	width: 2rem;
	height: 2rem;
	border: 2px solid $slider-color;
}

.dropdown__options-item-label:hover:after,
.dropdown__options-item-input:checked + .dropdown__options-item-label:after {
	border: 2px solid $slider-color-hover;
}

.dropdown__options-item-input:checked + .dropdown__options-item-label:after {
	background-color: $checkbox-color;
}

.dropdown__options-item-input:checked + .dropdown__options-item-label:before {
	transform: scale(1) translateY(-50%);
	opacity: 1;
}

.dropdown__options-item-label:hover,
.dropdown__options-item-label:focus {
	background-color: $backgorund-color-active;
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
