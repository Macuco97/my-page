const headerTitle = "h-14 w-screen font-serif text-3xl p-2 text-center mt-12"
const headerSubTitle = "w-screen font-serif text-2xl p-2 text-center underline underline-offset-8 mt-12"

export default function Header() {
    return (
        <header>
            <div className = {headerSubTitle}>
                SOLUÇÕES OFERECIDAS
            </div>
        </header>
    )
}