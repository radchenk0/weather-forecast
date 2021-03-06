const loggerMiddleware = ({ getState }) => next => action => {
    console.log("dispatching", action);
    const result = next(action);
    console.log("new state", getState());
    return result;
};

export default loggerMiddleware;