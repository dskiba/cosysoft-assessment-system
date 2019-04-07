/**
 * Расширение Object.assign для deepMerge объектов
 * @param {Object} objectA объект для изменения
 * @param {Object} objectB дополнительный объект
 * @return {Object} изменённый объект objectA
 */
export function assign(objectA, objectB) {
  const keysB = Object.keys(objectB);
  keysB.forEach(key => {
    if (objectA[key] instanceof Object && objectB[key] instanceof Object) {
      assign(objectA[key], objectB[key]);
    } else {
      objectA[key] = objectB[key]; // eslint-disable-line no-param-reassign
    }
  });
  return objectA;
}
