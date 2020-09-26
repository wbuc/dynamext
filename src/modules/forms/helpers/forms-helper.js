
import formEnums from './forms-enum'

function generateFormId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}
function newFormId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}
function generateFormControlId(){
    return (Date.now().toString(36) + Math.random().toString(36).substr(2)).toUpperCase();
}

function cloneObject(object) {
    let newObj = {};
    for (let key in object) {
        newObj[key] = object[key];
    }
    return newObj;
}

export default { 
    generateFormControlId, 
    generateFormId, 
    newFormId, 
    cloneObject,
    ...formEnums
}
