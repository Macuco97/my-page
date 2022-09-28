i/*mport Card from '../components/card.js'
import Footer from "../components/footer.js"

export default function Webdev() {
    return ( 
        <div className = {`bg-slate-100 min-h-screen min-w-screen font-semibold font-serif`}>
            <div className = {`text-3xl pt-4 pl-4`}>
                Sobre
            </div>
            <div className = {`font-medium pl-4`}>
                Criação de Sites com objetivo de criar uma marca digital do seu negócio e ser localizado no Google. O site é construído visando rankear as melhores posições de pesquisa do Google.
            </div>
            <div className = {`pl-4 text-xl underline underline-offset-8 uppercase mt-8`}> 
                Veja o portfólio abaixo
            </div>
            <div className = {`pl-4 flex flex-col`}>
                <Card
                href = "https://queue-manager-rho.vercel.app/">
                    <div>Queue Manager</div>
                    <div className = {`font-medium`}>Aplicativo criado para gerenciar filas através do smartphone. Foi criado para resolver questões de medicos que trabalham por ordem de chegada</div>
                </Card>
                <Card
                href = "https://note-book-ten.vercel.app/">
                    <div>Notebook</div>
                    <div className = {`font-medium`}>Site criado para realizar anotações de senhas. Layout customizado de acordo com as necessidades do cliente</div>
                </Card>
                <Footer/>                
            </div>
        </div>
    )
}*/