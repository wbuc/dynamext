
import formEnums from './forms-enum'


function newFormId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}
function generateFormControlId(){
  //  return 'control-' + (Date.now().toString(36) + Math.random().toString(36).substr(2)).toUpperCase();
   return 'control-' + Date.now().toString(36) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
function generateFormId(){
     return 'definition-' + Date.now().toString(36) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
function cloneObject(object) {

    // could also use let newObjec = Object.create(object);
    let newObj = {};
    for (let key in object) {
        newObj[key] = object[key];
    }
    return newObj;
}

const formIcons = [
                'mdi-file-document',
                'mdi-file-document-outline',
                "mdi-flag-variant",
                'mdi-menu',
                'mdi-alert-circle-outline',
                'mdi-roman-numeral-1',
                'mdi-roman-numeral-2',
                'mdi-roman-numeral-3',
                'mdi-roman-numeral-4',
                'mdi-roman-numeral-5',
                'mdi-check',
                'mdi-checkbox-blank-circle',
                'mdi-star',
                'mdi-duck'
]

export default { 
    generateFormControlId, 
    generateFormId, 
    newFormId, 
    cloneObject,
    ...formEnums,
    formIcons
}
