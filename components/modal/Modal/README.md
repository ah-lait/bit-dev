# Modal

The state(open/closed) of the modal has to be passed down from parent component as prop, along with the function that changes it. This is so that the modal can be toggled by a button that is not part of the component. Uses the `<slot>` element as distribution outlet for content. This way the nested component can emit data around the Modal component straigth to the parent.

## Props

**isOpen**

- type: Boolean
- default: False

**ariaClose**

- type: String
- default: "Luk"

**ariaDescribedBy**

- type: String
- default: null

**toggleModal**

- type: Function

## Css variables

| CSS Vars                        | Type       |
| ------------------------------- | ---------- |
| \ --bit-modal-backdrop-bg-color | hex/rgb    |
| \ --bit-modal-content-bg-color  | hex/rgb    |
| \ --bit-modal-focus-outline0    | hex/rgb    |
| \ --bit-modal-close-btn-color   | hex/rgb    |
| \ --bit-modal-transition        | hex/rgb    |
| \ --bit-modal-content\_\_height | hex/rgb    |
| \ --bit-modal-content\_\_width  | outline    |
| \ --bit-modal-index             | transition |

## Accessibility

- https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html
- Needs to be added to the modal content:
- The content wrapper has an "aria-labelledby='modal**label'" that needs to be referenced in the content. ie: h2 with an id=”modal**label”
- The modal content wrapper needs to have an ID that references the modal wrapper's aria-describedby="modal\_\_description"

### Modal

| Key    | Function         |
| ------ | ---------------- |
| Escape | Closes the modal |

### Close icon button

| Key    | Function         |
| ------ | ---------------- |
| Enter  | Closes the modal |
| Space  | Closes the modal |
| Escape | Closes the modal |
