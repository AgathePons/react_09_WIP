/**
 * Find the highest id and return it +1
 * @param {Array<Object>} collection array of objects with id key
 * @returns {number} new id
 */
// eslint-disable-next-line import/prefer-default-export
export function getNewId(collection) {
  if (collection.length === 0) return 1;
  const idList = collection.map((item) => item.id);
  const maxId = Math.max(...idList);
  return maxId + 1;
}
