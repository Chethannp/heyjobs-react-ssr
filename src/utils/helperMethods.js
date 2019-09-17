export const changeKeys = obj => {
  if (/^(undefined|string|number)$/.test(typeof obj)) return obj;
  if (obj == null) return obj;
  if (Array.isArray(obj)) {
    //  let newObj = []
    obj.forEach((a, i) => {
      obj[i] = changeKeys(obj[i]);
    });
    return obj;
  }
  if (typeof obj == "object") {
    let newObj = {};
    let keys = Object.keys(obj);

    keys.forEach(key => {
      let newKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase());
      newObj[newKey] = changeKeys(obj[key]);
    });
    return newObj;
  }
  return obj;
};
