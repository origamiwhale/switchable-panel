import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";

import reducer from './reducers';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger));

export default store;