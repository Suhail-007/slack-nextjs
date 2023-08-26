import Head from 'next/head';

import { useAppSelector, useAppDispatch } from './../store/store';
import { logUser } from '../store/userAuth';

export default function Home() {
  const { user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main onClick={() => dispatch(logUser())}>{user}</main>
    </>
  );
}