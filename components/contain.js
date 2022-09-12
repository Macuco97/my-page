export default function Contain({activeImage, setActiveImage}) {
const container = `flex flex-box justify-center justify-items-center mx-8 bg-slate-200 shadow-slate-500/50 shadow-2xl p-8 mt-12 w-80`
const manutencaoContents = `overflow-hidden ${activeImage === "manutencao" ? `transition opacity-100 duration-500` : `transition opacity-0 max-h-0 max-w-0`}`
const siteContents = `overflow-hidden ${activeImage === 'site' ? `transition opacity-100 duration-500` : `transition opacity-0 max-h-0 max-w-0`}`
const discContents = `overflow-hidden ${activeImage === 'disc' ? `transition opacity-100 duration-500` : `transition opacity-0 max-h-0 max-w-0`}`
const title = "text-xl mb-2 text-center underline"

    return (
        <div className = {`flex flex-row justify-center`}>
            <section className = {container}>
                <div className = {manutencaoContents}>
                    <h3 className = {title}>
                        MANUTENÇÃO DE COMPUTADORES
                    </h3>
                    <p>
                        Manutenção preventiva e corretiva de computadores e notebooks com instalação do Windows 10 ou outro da preferência do cliente.
                    </p>
                </div>
                <div className = {siteContents}>
                    <h3 className = {title}>
                        CRIAÇÃO DE WEBSITE
                    </h3>
                    <p>
                        Criação de sistemas modernos otimizados para rankeamento nas melhores posições nas pesquisas do Google. 
                    </p>
                </div>
                <div className = {discContents}>
                    <h3 className = {title}>
                        RECUPERAÇÃO DE DADOS
                    </h3>
                    <p>
                        Recuperação de fotos, e arquivos deletados ou corrompidos tanto de mídias externas como do computador
                    </p>
                </div>
            </section>
        </div>
    )
}