import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from "./api/auth/[...nextauth]";
import { useSession } from 'next-auth/react';
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login';


export default function Home() {
  const { data: session } = useSession();

  if (typeof window === 'undefined') return null;

  if (session) {
    return (
      <div className=''>
        <Head>
          <title>Facebook</title>
        </Head>

        <Header />

        <main>

        </main>
      </div>
    );
  } else {
    return <Login />
  }
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await unstable_getServerSession(
        context.res,
        context.req,
        authOptions
      ),
    },
  }
}