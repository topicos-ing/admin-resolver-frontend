import {
  ThunkAction,
  Action,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authReducer from "./slices/authSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  // To persist add the key in the reducer.
  whitelist: ["auth"],
  storage,
};

const root = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, root);
export const store = configureStore({
  reducer: persistedReducer,
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const persistor = persistStore(store);

export default store;
