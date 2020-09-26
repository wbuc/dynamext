const enum_FormStatus = {
  Draft: 1,
  Offline: 2,
  Published: 3
};

const getEnumKey = (obj, val)=>{
    return Object.keys(obj).find(key => obj[key] === val)
}

export default {
  enum_FormStatus,
  getEnumKey
};
