import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'

export default function Home() {
  return (
    <div className={`flex`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>

  )
}
