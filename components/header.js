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
            <div className = {style.headerSubTitle}>Programador Front end</div>
            <div className = {style.headerTitle}>Sobre</div>
            <div className = {style.textToReader}>Programador Front end com dois anos de experiência em Freelance e com vivência na área de telecomunicações</div>
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
            <Card>
                <div>Notebook</div>
                <div>Plataforma utilizado para realizar anotações dos devices</div>
            </Card>
        </header>

    )
}