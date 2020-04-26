

function generateFormId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}
function cloneObject(object) {
    let newObj = {};
    for (let key in object) {
        newObj[key] = object[key];
    }
    return newObj;
}


export default { generateFormId, cloneObject }
