# Multy select dropdown

The component makes use of checkboxes to track what is chosen and what is not.

## Props

**options:**

- type: [{**value**: string, **Id**: string}]
- required: true

**label:**

- type: String
- default: "V&aelig;lg v&aelig;rdi"

**placeholder:**

- type: String
- default: "V&aelig;lg v&aelig;rdi"

## Emitter

@valuesChosen

## Scss variables

| Var                       | Type    |
| ------------------------- | ------- |
| \$backgorund-color        | hex/rgb |
| \$backgorund-color-active | hex/rgb |
| \$slider-color            | hex/rgb |
| \$slider-color-hover      | hex/rgb |
| \$checkbox-color          | hex/rgb |

## Accessibility

- https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-rearrangeable.html
- https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html

### Toggle button

| Key        | Function                                                                            |
| ---------- | ----------------------------------------------------------------------------------- |
| Enter      | Opens the dropdown and sets focus to the first element, or the first chosen element |
| Space      | Same as enter                                                                       |
| Down Arrow | Same as enter                                                                       |
| Up Arrow   | Same as enter                                                                       |

### Dropdown section

| Key        | Function                                                                                  |
| ---------- | ----------------------------------------------------------------------------------------- |
| Enter      | Check/Unchecks the element                                                                |
| Space      | Same as enter                                                                             |
| Down Arrow | Moves focus to the next element. If on the last element, moves focus to the first one     |
| Up Arrow   | Moves focus to the previous element. If on the first element, moves focus to the last one |
| Home       | Moves focus to the first element                                                          |
| End        | Moves focus to the last element                                                           |
| Escape     | Closes the dropdown and sets focus on the toggle button                                   |
