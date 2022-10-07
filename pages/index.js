import Head from 'next/head'
import Button from '../components/button'
import Footer from '../components/footer'
import Header from '../components/header.js'
import Link from 'next/link'
export default function Home() {
    const container = "bg-slate-200 min-h-screen min-w-screen p-8 font-serif"
    
    return (
        <div className = {container}>
            <Head>
                <title>Raphael Motta</title>
            </Head>
            <Header/>
        </div>
    )
}