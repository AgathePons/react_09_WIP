const logger = (store) => (next) => (action) => {
  console.log('logger action => ', action);

  // appel le middleware suivant ou les reducers
  const result = next(action);
  return result;
};

export default logger;
