# Search single select dropdown

A dropdwon that filters options based on the sting typed in the search input filed.
The component includes the chosen value in an input field for normal form submission and emit's it through the valueChosen event.

## Props

**options:**

- type: [{**Value**: string, **Text**: string}]
- required: true

**placeholder:**

- type: String
- default: "V&aelig;lg v&aelig;rdi"

**comboboxId:**

- type: String
- default: "dropdown-combobox"

**listboxId:**

- type: String
- default: "dropdown-listbox"

**inputId:**

- type: String
- default: "search-input"

**label:**

- type: String
- default: "V&aelig;lg v&aelig;rdi"

**labelId:**

- type: String
- default: "dropdown-label"

**buttonLabel:**

- type: String
- default: "Vis indstillinger"

**inputName:**

- type: String
- default: "search-input-name"

## Emitter

@valueChosen

## Scss variables

| Var                       | Type    |
| ------------------------- | ------- |
| \$backgorund-color        | hex/rgb |
| \$backgorund-color-active | hex/rgb |
| \$slider-color            | hex/rgb |
| \$slider-color-hover      | hex/rgb |

## Accessibility

- https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html

### Toggle button

| Key        | Function                                              |
| ---------- | ----------------------------------------------------- |
| Enter      | Opens the dropdown and sets focus to the search input |
| Space      | Same as enter                                         |
| Down Arrow | Same as enter                                         |
| Up Arrow   | Same as enter                                         |

### Search input

| Key        | Function                                                                                                 |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| Enter      | Chooses the highlighted element from the dropdown list                                                   |
| Down Arrow | Highlightes next element in the dropdwon list. If on the last element, highlightes the first one         |
| Up Arrow   | Highlightes the previous element in the dropdwon list. If on the first element, highlightes the last one |
| Home       | Highlightes the first element in the dropdwon list                                                       |
| End        | Highlightes the last element in the dropdwon list                                                        |
| Escape     | Closes the dropdown and sets focus on the toggle button                                                  |
