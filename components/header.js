import Options from './options.js'
import Card from './card.js'

const style = {
    header: "",
    headerTitle: "text-3xl font-bold mt-8",
    headerSubTitle: "text-lg",
    textToReader: "font-mono",
    optionsContainer: "flex flex-row flex-wrap gap-4"
}

const options = ['html', 'javascript', 'css', 'react', 'tailwindcss', 'next.js', 'mongoDb']

export default function Header() {
    return (
        <header className = {style.header}>
            <div className = {style.headerTitle}>Raphael Motta</div>
            <div className = {style.headerSubTitle}>Programador Web</div>
            <div className = {style.headerTitle}>Sobre</div>
            <div className = {style.headerSubTitle}>Programador Web com dois anos de experiência em Freelance e com vivência na área de telecomunicações.</div>
            <div className = {style.headerTitle}>Stacks</div>
            <div className = {style.optionsContainer}>
                {
                    options.map(option => {
                        return (
                            <Options text = {option}/>
                        )
                    })
                }
            </div>
            <div className = {style.headerTitle}>Portfolio</div>
            <div className = {style.headerSubTitle}>Todos os aplicativos abaixo são prototipos que possuem valores de exemplos e estão conectados em banco de dados de acesso público</div>
            <Card href = "https://note-book-ten.vercel.app/" stacks = {["next.js", "mongodb", "bootstrap"]}>
                <div>Notebook</div>
                <div>Plataforma com a finalidade de armazenar o levatamento dos devices de um setor técnico de áudiovisual. Versão mobile ainda em construção</div>
            </Card>
            <Card href = "https://queue-manager-rho.vercel.app/" stacks = {["next.js", "mongodb", "tailwind"]}>
                <div>Queue Manager</div>
                <div>Plataforma coma finalidade de gerenciar filas. Tem como principal alvo consultórios que funcionam por ordem de chegada, que tendo uma fila online, o paciente não tem a necessidade esperar necessariamente no local</div>
            </Card>
        </header>

    )
}