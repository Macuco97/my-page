import head from 'next/head'
import Button from '../components/button'
import Footer from '../components/footer'
import Link from 'next/link'
export default function Home() {
    return (
        <div className = {`bg-slate-100 h-screen w-screen`}>
            <div className = {`font-semibold font-sans flex flex-col`}>    
                <div className = {`text-4xl ml-8 mt-8`}>Olá !</div>
                <div className = {`text-2xl ml-8`}>Seja bem-vindo</div>
                <div className = {`text-xl ml-8`}>Aqui é o local onde você encontrará soluções em TI para alavancar seus negócios</div>
                <div className = {`underline underline-offset-8 mt-10 ml-8`}>Veja mais sobre</div>
                <div className = {`mt-4`}>
                    <Button href = "/manutencao">manutenção de computadores</Button>
                    <Button href = "/webdev">desenvolvimento de sites</Button>
                </div>
                <Footer/>
            </div>
        </div>
    )
}