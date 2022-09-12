const headerTitle = "h-14 w-screen font-serif text-3xl p-2 text-center mt-12"
const headerSubTitle = "w-screen font-serif text-1xl p-2 text-center underline underline-offset-8"

export default function Header() {
    return (
        <header>
            <div className = {headerTitle}>
               InfoTech Soluções
            </div>
            <div className = {headerSubTitle}>
                ESCOLHA ABAIXO A SOLUÇÃO DESEJADA
            </div>
        </header>
    )
}