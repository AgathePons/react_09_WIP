const logger = () => (next) => (action) => {
  console.log('logger action => ', action.type);

  // appel le middleware suivant ou les reducers
  const result = next(action);
  return result;
};

export default logger;
