import formEnums from "./forms-enum";

function newFormId() {
  return (
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substr(2, 5)
  ).toUpperCase();
}
function generateFormControlId() {
  //  return 'control-' + (Date.now().toString(36) + Math.random().toString(36).substr(2)).toUpperCase();
  return (
    "control-" +
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}
function generateFormId() {
  return (
    "definition-" +
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}
function cloneObject(object) {
  // could also use let newObjec = Object.create(object);
  let newObj = {};
  for (let key in object) {
    newObj[key] = object[key];
  }
  return newObj;
}

function syncControlPositions(formControls) {
  for (let i = 0; i < formControls.length; i++) {
      formControls[i].sort = i;
  }
}
function updateFormControlsSort(evt, formControls) {
  // Control Updated
  if (evt.moved) {
    let startIndex = evt.moved.oldIndex;
    let endIndex = evt.moved.newIndex;

    // Step 1 - We need to update the current dragged element with the new position.
    evt.moved.element.sort = endIndex;

    // Step 2 - Determine other elements that needs an index update.
    if (startIndex < endIndex) {
      // update the items before the re-ordered item
      for (let i = endIndex - 1; i >= 0; i--) {
        formControls[i].sort = i;
      }
    } else {
      // update the items after the re-orderd item
      for (let i = endIndex + 2; i <= formControls.length; i++) {
        formControls[i - 1].sort = i - 1;
      }
    }
  }

  // Control Added
  if (evt.added) {
    // Step 1 - Update new control added sort order.
    let newIndex = evt.added.newIndex;
    evt.added.element.sort = newIndex;

    // Step 2 - Update all preceding controls sort index.
    for (let i = newIndex + 1; i < formControls.length; i++) {
      let originalSort = formControls[i].sort;
      formControls[i].sort = originalSort + 1;
    }
  }
}

const formIcons = [
  "mdi-file-document",
  "mdi-file-document-outline",
  "mdi-flag-variant",
  "mdi-menu",
  "mdi-alert-circle-outline",
  "mdi-roman-numeral-1",
  "mdi-roman-numeral-2",
  "mdi-roman-numeral-3",
  "mdi-roman-numeral-4",
  "mdi-roman-numeral-5",
  "mdi-check",
  "mdi-checkbox-blank-circle",
  "mdi-star",
  "mdi-duck",
];

export default {
  generateFormControlId,
  generateFormId,
  newFormId,
  cloneObject,
  ...formEnums,
  formIcons,
  updateFormControlsSort,
  syncControlPositions
};
