# Single select dropdown

The component also includes the value in an hidden input field for normal form submission.

## Props

**placeholder:**

- type: String
- default: "V&aelig;lg v&aelig;rdi"

**options:**

- type: [{**value**: string, **Id**: string}]
- required: true

**label:**

- type: String
- default: "V&aelig;lg v&aelig;rdi"

**buttonId:**

- type: String
- default: "dropdown-button"

**labelId:**

- type: String
- default: "dropdown-label"

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

- https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html

### Toggle button

| Key        | Function                                                                                                         |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| Enter      | Opens the dropdown and sets focus to the first element and chooses it, or sets focus on the first chosen element |
| Space      | Same as enter                                                                                                    |
| Down Arrow | Same as enter                                                                                                    |
| Up Arrow   | Same as enter                                                                                                    |

### Dropdown section

| Key        | Function                                                                                                               |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| Enter      | Closes the dropdown and sets focus to toggle button                                                                    |
| Space      | Same as enter                                                                                                          |
| Down Arrow | Moves focus to the next element and chooses it. If on the last element, moves focus to the first one and choose it     |
| Up Arrow   | Moves focus to the previous element and chooses it. If on the first element, moves focus to the last one and choose it |
| Home       | Moves focus to the first element and chooses it                                                                        |
| End        | Moves focus to the last element and choose it                                                                          |
| Escape     | Closes the dropdown and sets focus on the toggle button                                                                |
