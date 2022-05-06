
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from "redux-thunk"
import { createLogger } from 'redux-logger';
import {rootReducer} from "./RootReducer";
import { persistStore} from "redux-persist";

// import authReducer from './reducers/authReducer';
const reducer = (state,action) => rootReducer(state,action);

const logger = createLogger();

let middleware = [];
middleware = [...middleware,thunk];
c
// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

export const store = createStore(
  reducer,
  compose(applyMiddleware(...middleware,logger))
);

export const persistor = persistStore(store);
// setupListeners(store.dispatch);
