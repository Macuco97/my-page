import Card from '../components/card.js'

export default function Webdev() {
    return ( 
        <div className = {`container bg-slate-100 p-12 min-h-screen min-w-screen font-semibold font-serif`}>
            <div className = {`text-3xl`}>
                Sobre
            </div>
            <div className = {`font-medium`}>
                Criação de Sites com objetivo de criar uma marca digital do seu negócio e ser localizado no Google. O site é construído visando rankear as melhores posições de pesquisa do Google.
            </div>
            <div className = {`text-xl underline underline-offset-8 uppercase mt-8`}> 
                Veja o portfólio abaixo
            </div>
            <div className = {`flex flex-col`}>
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
                
                
            </div>
        </div>
    )
}