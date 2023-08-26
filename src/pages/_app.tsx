import '@/scss/main.scss';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';

import { wrapper } from '../store/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';


export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const persistorStore = persistStore(store);

    return (
        <Provider store={store}>
          <PersistGate persistor={persistorStore}>
            <Component {...props.pageProps} />
          </PersistGate>
        </Provider>
    );
}
