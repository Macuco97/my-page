import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Contain from '../components/contain'
import Footer from '../components/footer'
import { useState } from 'react'

export default function Home() {
  const [activeImage, setActiveImage] = useState('manutencao')
  

  return (
    <div className={`flex flex-col bg-slate-100 h-screen`}>
      <Head>
        <title>InfoTech Soluções</title>
        <meta name="description" content="Manutenção de Computadores e Desenvolvimento de Sites" />
        <meta property="og:image" content="https://my-page-macuco97.vercel.app/api/web-site.png" />
        <meta property="og:image:secure_url" content="https://my-page-macuco97.vercel.app/api/web-site.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Navbar
        activeImage = {activeImage}
        setActiveImage = {data => setActiveImage(data)}
      />
      <Contain
        activeImage = {activeImage}
        setActiveImage = {data => setActiveImage(data)}
      />
      <Footer/>
    </div>

  )
}
