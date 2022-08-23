import Image from 'next/image';
import { useSession, signIn } from "next-auth/react";

function Login() {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault()
    signIn()
  }

  return (
    <div className='grid place-items-center'>
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />

      {!session && <h1 onClick={handleSignin} className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>}
    </div>
  )
}

export default Login