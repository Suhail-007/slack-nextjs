import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/react';

import { useAppSelector, useAppDispatch } from './../store/store';
import { logUser } from '../store/userAuth';

export default function Home() {
  // const { user } = useAppSelector(state => state.auth);
  // const dispatch = useAppDispatch();
  const session = useSession();

  return (
    <>
      <Head>
        <title>Slack | login</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main onClick={async () => await signIn('google')}>
        {session.status === 'authenticated' && (
          <h1 onClick={() => signOut()}>{session?.data?.user?.name}</h1>
        )}
      </main>
    </>
  );
}
