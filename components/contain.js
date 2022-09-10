

export default function Contain() {
const manutencaoContainer = "mt-24 flex flex-col mx-8"
const manutencaoTitle = "text-xl my-5"
const list = "list-disc font-serif list-inside"
    return (
        <div className = {manutencaoContainer}>
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
    )
}