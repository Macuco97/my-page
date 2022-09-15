import Card from '../components/card.js'

export default function Webdev() {
    return ( 
        <div className = {`container bg-slate-100 p-12 min-h-screen min-w-screen font-semibold font-serif`}>
            <div className = {`text-xl underline underline-offset-8 uppercase`}> 
                Veja o portfólio abaixo
            </div>
            <div className = {`flex flex-col`}>
                <Card
                href = "https://queue-manager-rho.vercel.app/">
                    <div>Queue Manager</div>
                    <div>Aplicativo criado para gerenciar filas através do smartphone. Foi criado para resolver questões de medicos que trabalham por ordem de chegada</div>
                </Card>
                <Card
                href = "https://note-book-ten.vercel.app/">
                    <div>Notebook</div>
                    <div>Site criado para realizar anotações de senhas. Layout customizado de acordo com as necessidades do cliente</div>
                </Card>
                
                
            </div>
        </div>
    )
}