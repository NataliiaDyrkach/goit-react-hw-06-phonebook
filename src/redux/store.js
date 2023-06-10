import { configureStore } from '@reduxjs/toolkit';
import { PERSIST, persistStore } from 'redux-persist';

import { persisteContactReducer} from './contactsSlice';

export const store = configureStore({
  reducer: { contacts: persisteContactReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ PERSIST],
      },
    }),
});


export const persistor = persistStore(store);
