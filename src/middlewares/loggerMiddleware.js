const logger = () => (next) => (action) => {
  console.log('logger action => ', action.type);

  // call the next middleware or the reducers
  const result = next(action);
  return result;
};

export default logger;
