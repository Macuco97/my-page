import head from 'next/head'
import Button from '../components/button'
import Footer from '../components/footer'
import Link from 'next/link'
export default function Home() {
    return (
        <div className = {`p-8 bg-slate-100 min-h-screen w-screen m-0`}>
            <div className = {`font-semibold font-sans flex flex-col`}>    
                <div className = {`text-4xl`}>Olá !</div>
                <div className = {`text-2xl`}>Seja bem-vindo</div>
                <div className = {`text-xl`}>Aqui é o local onde você encontrará soluções em TI para alavancar seus negócios</div>
                <div className = {`underline underline-offset-8 mt-10`}>Veja mais sobre</div>
                <div className = {`mt-4`}>
                    <Button href = "/manutencao">manutenção de computadores</Button>
                    <Button href = "/webdev">desenvolvimento de sites</Button>
                </div>
                <Footer/>
            </div>
        </div>
    )
}