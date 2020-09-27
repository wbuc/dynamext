
export const controls = [
    {
        id: 1,
        name: "Text",
        type: "text",
        instruction: null,
        value: null,
        description: "Single line input field",
        icon: "mdi-format-text",
        properties: {
            default: null,
            placeholder: "Enter a value",
            isImportant: false,
            minLength: 1,
            maxLength: 100
        },
        hasValidations: false,
        validations: {}
    },
    {
        id: 2,
        name: "Paragraph",
        type: "paragraph",
        instruction: null,
        value: null,
        description: "Multi line text inut field",
        icon: "mdi-format-pilcrow",
        properties: {
            default: null,
            placeholder: "Enter a value",
            isImportant: false,
            rows: 5
        },
        hasValidations: false,
        validations: {}
    },
    {
        id: 3,
        name: "Header",
        type: "header",
        instruction: null,
        value: null,
        description: "Header used for grouping fields",
        icon: "mdi-format-header-1",
        properties: {
            size: "display-1",
            color: "",
            style: ""
        },
        hasValidations: false,
        validations: {}
    },
    {
        id: 4,
        name: "Decimal",
        type: "decimal",
        instruction: null,
        value: 0.0,
        description: "Numbers with decimal values",
        icon: "mdi-decimal",
        properties: {
            isImportant: false,
        },
        hasValidations: false,
        validations: {}
    },
    {
        id: 5,
        name: "Number",
        type: "number",
        instruction: null,
        value: 0,
        description: "Full number values",
        icon: "mdi-numeric-3-box-outline",
        properties: {
            default: 0,
            placeholder: "Enter a number",
            isImportant: false,
        },
        hasValidations: false,
        validations: {}
    },
    {
        id: 6,
        name: "Information",
        type: "information",
        instruction:null,
        value: null,
        description: "Text block for specific information",
        icon: "mdi-information-variant",
        properties: {
            size: "body-1",
            type: "info",
            style: {}
        },
        hasValidations: false,
        validations: {}
    },
    {
        id: 7,
        name: "Yes/No",
        type: "yesno",
        instruction: null,
        value: null,
        description: "True or false value to be set",
        icon: "mdi-order-bool-descending",
        properties: {
            default: null,
            isImportant: false,
        },
        hasValidations: false,
        validations: {}
    },
    {
        id: 8,
        name: "Dropdown",
        type: "dropdown",
        instruction: null,
        value: null,
        description: "Select an option from a dropdown list",
        icon: "mdi-view-list",
        properties: {
            default: null,
            isImportant: false,
            selectableOptions: []
        },
        hasValidations: false,
        validations: {}
    }
];