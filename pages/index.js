import head from 'next/head'
import Button from '../components/button'
import Footer from '../components/footer'

export default function Home() {
    return (
        <div className = {`container p-8 bg-slate-100 min-h-screen min-w-screen`}>
            <div className = {`font-semibold font-mono`}>    
                <div className = {`text-4xl`}>Olá !</div>
                <div className = {`text-2xl`}>Seja bem-vindo</div>
                <div className = {`text-xl`}>Aqui é o local onde você encontrar soluções em TI para alavancar seu negócios</div>
                <div className = {`underline underline-offset-8 mt-10`}>Clique abaixo para saber mais</div>
                <div className = {`mt-4`}>
                    <Button>manutenção de computadores</Button>
                    <Button>desenvolvimento de sites</Button>
                </div>
                <Footer/>
            </div>
        </div>
    )
}