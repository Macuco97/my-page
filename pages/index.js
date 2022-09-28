import head from 'next/head'
import Button from '../components/button'
import Footer from '../components/footer'
import Header from '../components/header.js'
import Link from 'next/link'
export default function Home() {
    const container = "bg-slate-100 h-screen w-screen p-8 font-serif"
    
    return (
        <div className = {container}>
            <Header/>
        </div>
    )
}