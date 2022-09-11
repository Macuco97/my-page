export default function Contain({activeImage, setActiveImage}) {
const container = `mt-12 flex flex-col mx-8`
const manutencaoContents = `overflow-hidden ${activeImage === "manutencao" ? `transition opacity-100 duration-500` : `transition opacity-0 max-h-0`}`
const siteContents = `overflow-hidden ${activeImage === 'site' ? `transition opacity-100 duration-500` : `transition opacity-0 max-h-0`}`

const manutencaoTitle = "text-xl my-5"
const list = "list-disc font-serif list-inside"
    return (
        <div className = {container}>
            <div className = {manutencaoContents}>
                <h3 className = {manutencaoTitle}>
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
                <h3>
                    CRIAÇÃO DE SITE
                </h3>
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
        </div>
    )
}