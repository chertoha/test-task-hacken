import codeApi from "./code/codeApi";
import coinsApi from "./coins/coinsApi";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
    [codeApi.reducerPath]: codeApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware()
      .concat(coinsApi.middleware)
      .concat(codeApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
