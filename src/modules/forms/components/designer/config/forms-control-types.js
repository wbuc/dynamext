// NOT IN USE. Will implement this later when it makes sense.
export const controlTypes = {
    text: [
        {
            group: "Group 1",
            properties: [
                {
                    name: "default",
                    displayName: "Default Value",
                    value: "",
                    type: "text",
                    placeholder:
                        "Proivde default value for the field."
                },
                {
                    name: "placeholder",
                    displayName: "Placeholder Value",
                    value: "",
                    type: "text",
                    placeholder: ""
                }
            ],
            validations: [
                {
                    name: "minLength",
                    displayName: "Minimum Length",
                    value: 0,
                    type: "text"
                },
                {
                    name: "maxLength",
                    displayName: "Maximum Length",
                    value: 100,
                    type: "text"
                },
                {
                    name: "customExpression",
                    displayName: "Custom Expression",
                    value: null,
                    type: "text"
                }
            ]
        }
    ],
    paragraph: [
        {
            group: "Group 1",
            properties: [
                {
                    name: "default",
                    displayName: "Default Value",
                    value: "",
                    type: "text",
                    placeholder:
                        "Proivde default value for the field."
                },
                {
                    name: "placeholder",
                    displayName: "Placeholder Value",
                    value: "",
                    type: "text",
                    placeholder: ""
                },
                {
                    name: "rows",
                    displayName: "Rows",
                    value: 5,
                    type: "number",
                    placeholder: 5
                }
            ],
            validations: [
                {
                    name: "minLength",
                    displayName: "Minimum Length",
                    value: 0,
                    type: "number"
                },
                {
                    name: "maxLength",
                    displayName: "Maximum Length",
                    value: 5000,
                    type: "number"
                },
                {
                    name: "customExpression",
                    displayName: "Custom Expression",
                    value: null,
                    type: "text"
                }
            ]
        }
    ],
    header: [
        {
            group: "Group 1",
            properties: [
                {
                    name: "size",
                    displayName: "Size",
                    value: "",
                    type: "select",
                    options: [
                        {
                            name: "display-3",
                            displayName: "Extra Large"
                        },
                        {
                            name: "display-2",
                            displayName: "Large"
                        },
                        {
                            name: "display-1",
                            displayName: "Medium"
                        },
                        {
                            name: "title",
                            displayName: "Small"
                        }
                    ]
                },
                {
                    name: "color",
                    displayName: "Color",
                    value: "",
                    type: "select",
                    options: [
                        {
                            name: "",
                            displayName: "Default"
                        },
                        {
                            name: "primary--text",
                            displayName: "Primary"
                        },
                        {
                            name: "secondary--text",
                            displayName: "Secondary"
                        },
                        {
                            name: "accent--text",
                            displayName: "Accent"
                        },
                        {
                            name: "warning--text",
                            displayName: "Caution"
                        },
                        {
                            name: "error--text",
                            displayName: "Important"
                        }
                    ]
                },
                {
                    name: "style",
                    displayName: "Style",
                    value: "",
                    type: "select",
                    options: [
                        {
                            name: "",
                            displayName: "None"
                        },
                        {
                            name: "border",
                            displayName: "Border"
                        }
                    ]
                }
            ]
        }
    ],
    decimal: [],
    number: [
        {
            group: "Group 1",
            properties: [
                {
                    name: "default",
                    displayName: "Default value",
                    value: "",
                    type: "number",
                    placeholder: 0
                },
                {
                    name: "placeholder",
                    displayName: "Placeholder",
                    value: "",
                    type: "text"
                }
            ],
            validations: [
                {
                    name: "minValue",
                    displayName: "Minimum value",
                    value: 0,
                    type: "number"
                },
                {
                    name: "maxValue",
                    displayName: "Maximum value",
                    value: 1000,
                    type: "number"
                },
                {
                    name: "customExpression",
                    displayName: "Custom expression",
                    value: null,
                    type: "text"
                }
            ]
        }
    ],
    information: [
        {
            group: "Group 1",
            properties: [
                {
                    name: "size",
                    displayName: "Size",
                    value: "",
                    type: "select",
                    options: [
                        {
                            name: "display-1",
                            displayName: "Extra Large"
                        },
                        {
                            name: "title",
                            displayName: "Large"
                        },
                        {
                            name: "body-1",
                            displayName: "Medium"
                        },
                        {
                            name: "caption",
                            displayName: "Small"
                        }
                    ]
                },
                {
                    name: "type",
                    displayName: "Type",
                    value: "",
                    type: "select",
                    options: [
                        {
                            name: null,
                            displayName: "None",
                            icon: false
                        },
                        {
                            name: "info",
                            displayName: "Information"
                        },
                        {
                            name: "warning",
                            displayName: "Caution"
                        },
                        {
                            name: "error",
                            displayName: "Important"
                        }
                    ]
                },
                {
                    name: "style",
                    displayName: "Style",
                    value: "",
                    type: "select",
                    options: [
                        {
                            name: {},
                            displayName: "None"
                        },
                        {
                            name: { outlined: true },
                            displayName: "Outlined"
                        },
                        {
                            name: { prominent: true },
                            displayName: "Prominent"
                        },
                        {
                            name: { dense: true },
                            displayName: "Dense"
                        }
                    ]
                }
            ]
        }
    ],
    yesno: [
        {
            group: "Group 1",
            properties: [
                {
                    name: "default",
                    displayName: "Default value",
                    value: null,
                    type: "select",
                    options: [
                        {
                            name: null,
                            displayName: "None"
                        },
                        {
                            name: "true",
                            displayName: "Yes"
                        },
                        {
                            name: "false",
                            displayName: "No"
                        }
                    ],
                    onChange: val => {
                        // NOTE *** these events can be used on specific properties to execute when needed to perform additional logic.
                        // ensure that the property type in the properties panel has been updated to execute this func. this would
                        // typically only be used when setting a default value from an option field.
                        // Set the current contol value to the new default option selected.
                        this.currentControl.value = val;
                    }
                }
            ]
        }
    ],
    dropdown: [
        {
            group: "Group 1",
            properties: [
                {
                    name: "default",
                    displayName: "Default value",
                    value: null,
                    type: "select",
                    options: [],
                    onChange: val => {
                        this.currentControl.value = val;
                    }
                },
                {
                    name: "selectableOptions",
                    displayName: "Dropdown options",
                    value: "",
                    type: "tag",
                    placeholder: ""
                }
            ],
            validations: [
                {
                    name: "customExpression",
                    displayName: "Custom Expression",
                    value: null,
                    type: "text"
                }
            ]
        }
    ]
}