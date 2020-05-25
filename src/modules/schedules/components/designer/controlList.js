
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
        properties: {},
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
            placeholder: "Enter a number"
        },
        hasValidations: false,
        validations: {}
    },
    {
        id: 6,
        name: "Information",
        type: "information",
        instruction:
            "Collaboratively administrate empowered markets via plug-and-play networks.",
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
        instruction: "",
        value: null,
        description: "True or false value to be set",
        icon: "mdi-order-bool-descending",
        properties: {
            default: null
        },
        hasValidations: false,
        validations: {}
    },
    {
        id: 8,
        name: "Dropdown",
        type: "dropdown",
        instruction: "",
        value: null,
        description: "Select an option from a dropdown list",
        icon: "mdi-view-list",
        properties: {
            default: null,
            selectableOptions: []
        },
        hasValidations: false,
        validations: {}
    }

];