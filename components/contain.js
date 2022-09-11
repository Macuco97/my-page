export default function Contain({activeImage, setActiveImage}) {
const container = `flex flex-col mx-8 self-start`
const manutencaoContents = `mt-4 overflow-hidden ${activeImage === "manutencao" ? `transition opacity-100 duration-500` : `transition opacity-0 max-h-0`}`
const siteContents = `overflow-hidden ${activeImage === 'site' ? `transition opacity-100 duration-500` : `transition opacity-0 max-h-0`}`
const discContents = `overflow-hidden ${activeImage === 'disc' ? `transition opacity-100 duration-500` : `transition opacity-0 max-h-0`}`
const title = "text-xl text-center"
const list = "list-disc font-serif list-inside"
    return (
        <div className = {container}>
            <div className = {manutencaoContents}>
                <h3 className = {title}>
                    MANUTENÇÃO DE COMPUTADORES
                </h3>
                <ul className = {list}>
                    <li>
                        MANUTENÇÃO PREVENTIVA E CORRETIVA DE COMPUTADORES E NOTEBOOKS
                    </li>
                    <li>
                        FORMATAÇÃO COM INSTALAÇÃO DE WINDOWS (XP, 7, 10, 11) OU OUTROS SISTEMAS OPERACIONAIS
                    </li>
                    <li>
                        INSTAÇÃO DE APLICATIVOS E SOFTWARES
                    </li>
                </ul>
            </div>
            <div className = {siteContents}>
                <h3 className = {title}>
                    CRIAÇÃO DE WEBSITE
                </h3>
                <ul className = {list}>
                    <li>
                        Criação de sites modernos
                    </li>
                    <li>
                        Otimização do SEO para o site aparecer em melhores posições no Rankeamento da Google
                    </li>
                    <li>
                         Criação de feature performáticas conforme a necessidade do cliente
                    </li>
                </ul>                
            </div>
            <div className = {discContents}>
            <ul className = {list}>
                <h3 className = {title}>
                    RECUPERAÇÃO DE DADOS
                </h3>
                    <li>
                        Recuperação de fotos e vídeos deletados
                    </li>
                    <li>
                        Recuperação de arquivos em pendrive, ou mídias externas corrompidas
                    </li>
                </ul>
            </div>
        </div>
    )
}